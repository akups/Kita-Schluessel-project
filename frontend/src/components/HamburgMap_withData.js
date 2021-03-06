import * as React from "react";
import { Component } from "react";
import { render } from "react-dom";
import MapGL, { Source, Layer, NavigationControl } from "react-map-gl";
import mapLocales from "../locales/locales.map.json";
import { json as requestJson } from "d3-request";
import { PureComponent } from "react";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWt1cDIxIiwiYSI6ImNrNzd0bzJ2cTA5MWgzbG55Z3oxeGEwcXEifQ._STj0U9zQNrv2I1Stwicig"; // Set your mapbox token here
const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px",
  width: 30,
};

const lang = localStorage.getItem("lang");

const layers = [
  "-260-100",
  "100-200",
  "200-400",
  "400-600",
  "600-800",
  "800-1000",
  "1000-1500",
  "1500-2000",
  "2000-2500",
  "2500-4509",
];
const colors = [
  "#e5f2f6",
  "#cce6ee",
  "#b2dae6",
  "#99cede",
  "#7fc2d6",
  "#66b6cd",
  "#4caac5",
  "#329ebd",
  "#1992b5",
  "#0086ad",
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
          width: 150,
        }}
      >
        <span
          className="legend-key"
          style={{
            display: "inline-block",
            width: "20px",
            backgroundColor: color,
          }}
        ></span>
        <span style={{ color: "#003333" }}>{layer}</span>
      </div>
    );
  });
};

class ControlPanel extends PureComponent {
  render() {
    const { settings } = this.props;

    return (
      <div className="control-panel">
        <h3>Hamburg {mapLocales.titleAdd[lang]}</h3>
        <p>
          {mapLocales.titleHamburg[lang]}
          <b>{settings.year}</b> <br /> {mapLocales.explainHamburg[lang]}
        </p>
        <p>{/* Data source: <a href="">Berlin City</a> */}</p>

        <hr />
        {/* <div className="map-overlay" id="legend">
          {drawLegends()}
        </div> */}
      </div>
    );
  }
}

const dataLayer = {
  id: "data",
  type: "fill",
  paint: {
    "fill-color": {
      property: "Difference",
      stops: [
        [100, "#e5f2f6"],
        [200, "#cce6ee"],
        [400, "#b2dae6"],
        [600, "#99cede"],
        [800, "#7fc2d6"],
        [1000, "#66b6cd"],
        [1500, "#4caac5"],
        [2000, "#329ebd"],
        [2500, "#1992b5"],
        [4509, "#0086ad"],
      ],
    },
    "fill-opacity": 0.4,
  },
};

function updateState(featureCollection) {
  const { features } = featureCollection;

  return {
    type: "FeatureCollection",
    features: features.map((f) => {
      const properties = {
        ...f.properties,
        // value
      };
      return { ...f, properties };
    }),
  };
}

class HamburgMap extends Component {
  state = {
    data: null,
    hoveredFeature: null,
    viewport: {
      latitude: 53.57532,
      longitude: 10.01534,
      zoom: 9.5,
      bearing: 0,
      pitch: 0,
      width: "100vw",
      height: "100vh",
    },
  };

  componentDidMount() {
    let url =
      "https://raw.githubusercontent.com/akups/Kita-Schluessel-project/master/frontend/src/data/HamburgKitaMap3.geojson";

    requestJson(url, (error, response) => {
      if (!error) {
        this._loadData(response);
      }
    });
  }

  _loadData = (data) => {
    this.setState({
      data: updateState(data), //[this.state.year]
    });
  };

  _onViewportChange = (viewport) => this.setState({ viewport });

  _onHover = (event) => {
    const {
      features,
      srcEvent: { offsetX, offsetY },
    } = event;
    const hoveredFeature =
      features && features.find((f) => f.layer.id === "data");

    this.setState({ hoveredFeature, x: offsetX, y: offsetY });
  };

  _renderTooltip() {
    const { hoveredFeature, x, y } = this.state;

    return (
      hoveredFeature && (
        <div className="tooltip" style={{ left: x, top: y }}>
          <div>
            {mapLocales.labelHamburg[lang]}:{" "}
            {hoveredFeature.properties.Stadteile_}
          </div>
          <div>
            {mapLocales.move[lang]}: {hoveredFeature.properties.Difference}
          </div>
          <div>
            {mapLocales.available[lang]}: {hoveredFeature.properties.Kita_Spots}
          </div>
        </div>
      )
    );
  }

  render() {
    const { viewport, data } = this.state;

    return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/akup21/ck8kh9pc108551iqx52wjdake"
        onViewportChange={this._onViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onHover={this._onHover}
      >
        <Source type="geojson" data={data}>
          <Layer {...dataLayer} />
        </Source>
        {this._renderTooltip()}
        <ControlPanel
          containerComponent={this.props.containerComponent}
          settings={this.state}
        ></ControlPanel>
        <div className="nav" style={navStyle}>
          <NavigationControl />
          <div>
            <div id="map"></div>
            <div
              class="map-overlay"
              id="features"
              style={{
                display: "inline-block",
                width: 150,
                height: 100,
                backgroundColor: "white",
                border: 20,
              }}
            >
              <h3>Hamburg {mapLocales.move[lang]}</h3>
            </div>
            <div class="map-overlay" id="legend">
              {drawLegends()}
            </div>
          </div>
        </div>
      </MapGL>
    );
  }
}

export default HamburgMap;
