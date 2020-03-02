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
  "0-30",
  "31-50",
  "51-100",
  "101-120",
  "121-150",
  "151-200",
  "201-250",
  "251-300",
  "301-319"
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

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 53.57532,
        longitude: 10.01534,
        zoom: 10,
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
        mapStyle="mapbox://styles/akup21/ck76k45rr172h1iqlrsb0ghyw" //mapbox://styles/
        mapboxApiAccessToken={TOKEN}
      >
        <div className="nav" style={navStyle}>
          <NavigationControl />
          <div>
            <div id="map"></div>
            <div class="map-overlay" id="features">
              <h2>Hamburg Kitaplätze</h2>
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
