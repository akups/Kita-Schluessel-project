import React, { Component } from "react";
import MapGL, { NavigationControl } from "react-map-gl";
import mapLocales from "../locales/locales.map.json";

const TOKEN =
  "pk.eyJ1IjoiYWt1cDIxIiwiYSI6ImNrNzd0bzJ2cTA5MWgzbG55Z3oxeGEwcXEifQ._STj0U9zQNrv2I1Stwicig";
const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px",
  width: 30
};

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

// Map.on("load", function() {
//   // the rest of the code will go in here
// });

export default class BerlinMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  onloadMap = event => {
    let legend;
    for (let i = 0; i < layers.length; i++) {
      var layer = layers[i];
      var color = colors[i];
      var item = document.createElement("div");
      var key = document.createElement("span");
      key.className = "legend-key";
      key.style.backgroundColor = color;

      var value = document.createElement("span");
      value.innerHTML = layer;
      item.appendChild(key);
      item.appendChild(value);
      legend.appendChild(item);
    }
  };

  drawLegends = () => {
    return layers.map((layer, i) => {
      const color = colors[i];
      return (
        <div
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
          <span>{layer}</span>
        </div>
      );
    });
  };

  render() {
    const { viewport } = this.state;
    const lang = localStorage.getItem("lang");

    return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/akup21/ck7an89si3ifj1iumt6579c0z"
        mapboxApiAccessToken={TOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
      >
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
                border: 20
              }}
            >
              {/* <h2>Berlin {mapLocales.kitas[lang]}</h2> */}

              <h2>Berlin Kitaplätze</h2>
              <div id="pd">
                <p>{mapLocales.move[lang]}</p>
              </div>
            </div>
            <div class="map-overlay" id="legend">
              {this.drawLegends()}
            </div>
          </div>
        </div>
      </MapGL>
    );
  }
}
