import React, { Component } from "react";
import MapGL, { NavigationControl } from "react-map-gl";

const TOKEN =
  "pk.eyJ1IjoiYWt1cDIxIiwiYSI6ImNrNzd0bzJ2cTA5MWgzbG55Z3oxeGEwcXEifQ._STj0U9zQNrv2I1Stwicig";
const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
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
  "#caefb8",
  "#90bd73",
  "#6ca745",
  "#479117",
  "#317a00",
  "#276200",
  "#143100",
  "#1d4a00",
  "#050d00"
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
        width: 1000,
        height: 800
      }
    };
  }

  render() {
    const { viewport } = this.state;
    return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/akup21/ck7an89si3ifj1iumt6579c0z"
        mapboxApiAccessToken={TOKEN}
      >
        <div className="nav" style={navStyle}>
          <NavigationControl />
          <div>
            <div id="map"></div>
            <div class="map-overlay" id="features">
              <h2>Berlin Kitaplätze</h2>
              <div id="pd">
                <p>Bewegun über Stadtteile!</p>
              </div>
            </div>
            <div class="map-overlay" id="legend"></div>
          </div>
        </div>
      </MapGL>
    );
  }
}
