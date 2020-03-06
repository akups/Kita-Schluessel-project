import * as React from "react";
import { Component } from "react";
import { render } from "react-dom";
import MapGL, { Source, Layer } from "react-map-gl";

import { json as requestJson } from "d3-request";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWt1cDIxIiwiYSI6ImNrNzd0bzJ2cTA5MWgzbG55Z3oxeGEwcXEifQ._STj0U9zQNrv2I1Stwicig"; // Set your mapbox token here

const layers = [
  "-423-0",
  "0-100",
  "100-200",
  "200-300",
  "300-400",
  "400-500",
  "500-600",
  "600-700",
  "700-800",
  "900-1109"
];
const colors = [
  "#daf5f4",
  "#b5ecec",
  "#89ecda",
  "#40e0d0",
  "#3acabb",
  "#2d9d92",
  "#007777",
  "#005555",
  "#003333",
  "#000a0a"
];

const drawLegends = () => {
  return layers.map((layer, i) => {
    const color = colors[i];
    return (
      <div
        key={i}
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          width: 100
        }}
      >
        <span
          className="legend-key"
          style={{
            display: "inline-block",
            width: "20px",
            backgroundColor: color
          }}
        ></span>
        <span style={{ color: "#003333" }}>{layer}</span>
      </div>
    );
  });
};

class ControlPanel extends React.Component {
  render() {
    const { settings } = this.props;

    return (
      <div className="control-panel">
        <h3>Berlin Missing Kita Spots Map</h3>
        <p>
          Map showing missing Kita Spots by postal code<b>{settings.year}</b>.
          Hover over a postal code area to see details.
        </p>
        <p>
          Data source: <a href="">Berlin City</a>
        </p>

        <hr />
        <div className="map-overlay" id="legend">
          {drawLegends()}
        </div>
      </div>
    );
  }
}

const dataLayer = {
  id: "data",
  type: "fill",
  paint: {
    "fill-color": {
      property: "Value",
      stops: [
        [0, "#daf5f4"],
        [100, "#b5ecec"],
        [200, "#89ecda"],
        [300, "#40e0d0"],
        [400, "#3acabb"],
        [500, "#2d9d92"],
        [600, "#007777"],
        [700, "#005555"],
        [800, "#003333"],
        [1109, "#000a0a"]
      ]
    },
    "fill-opacity": 0.8
  }
};

function updateState(featureCollection) {
  const { features } = featureCollection;

  return {
    type: "FeatureCollection",
    features: features.map(f => {
      const properties = {
        ...f.properties
        // value
      };
      return { ...f, properties };
    })
  };
}

class BerlinMap extends Component {
  state = {
    data: null,
    hoveredFeature: null,
    viewport: {
      latitude: 52.52008,
      longitude: 13.40495,
      zoom: 9.5,
      bearing: 0,
      pitch: 0,
      width: "100vw",
      height: "100vh"
    }
  };

  componentDidMount() {
    let url =
      "https://raw.githubusercontent.com/akups/Kita-Schluessel-project/master/frontend/src/data/BerlinKitaPlaetze.geojson";

    requestJson(url, (error, response) => {
      if (!error) {
        this._loadData(response);
      }
    });
  }

  _loadData = data => {
    this.setState({
      data: updateState(data) //[this.state.year]
    });
  };

  _onViewportChange = viewport => this.setState({ viewport });

  _onHover = event => {
    const {
      features,
      srcEvent: { offsetX, offsetY }
    } = event;
    const hoveredFeature =
      features && features.find(f => f.layer.id === "data");

    this.setState({ hoveredFeature, x: offsetX, y: offsetY });
  };

  _renderTooltip() {
    const { hoveredFeature, x, y } = this.state;

    return (
      hoveredFeature && (
        <div className="tooltip" style={{ left: x, top: y }}>
          <div>Postal Code: {hoveredFeature.properties.PLZ}</div>
          <div>Missing Kita Spots: {hoveredFeature.properties.Value}</div>
          <div>
            Number of Kita Spots:{" "}
            {hoveredFeature.properties.KitaPlaetzeBerlin_Plaetze}
          </div>
        </div>
      )
    );
  }

  render() {
    const { viewport, data } = this.state;

    return (
      <div>
        <MapGL
          {...viewport}
          mapStyle="mapbox://styles/akup21/ck7an89si3ifj1iumt6579c0z"
          onViewportChange={this._onViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onHover={this._onHover}
        >
          <Source type="geojson" data={data}>
            <Layer {...dataLayer} />
          </Source>
          {this._renderTooltip()}
        </MapGL>

        <ControlPanel
          containerComponent={this.props.containerComponent}
          settings={this.state}
        />
      </div>
    );
  }
}

export default BerlinMap;
