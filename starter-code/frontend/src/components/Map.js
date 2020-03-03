import React, { Component } from "react";
//import MapGL, { NavigationControl } from "react-map-gl";
import mapLocales from "../locales/locales.map.json";
import MapGL, { Marker, Popup, NavigationControl } from "react-map-gl";

const TOKEN =
  "pk.eyJ1IjoiYWt1cDIxIiwiYSI6ImNrNzd0bzJ2cTA5MWgzbG55Z3oxeGEwcXEifQ._STj0U9zQNrv2I1Stwicig";
const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};

const layers = [
  "-430-0",
  "0-100",
  "100-200",
  "200-300",
  "400-500",
  "500-600",
  "600-700",
  "700-800",
  "800-900",
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

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 53.57532,
        longitude: 10.01534,
        zoom: 9.5,
        bearing: 0,
        pitch: 0,
        width: 1000,
        height: 800
      },
      popupInfo: null
    };
    // this.renderPopup = this.renderPopup.bind(this);
  }
  render() {
    const { viewport } = this.state;
    const lang = localStorage.getItem("lang");
    console.log("lang", mapLocales, lang);
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
              <h2>Hamburg {mapLocales.kitas[lang]}</h2>
              <div id="pd">
                <p>{mapLocales.move[lang]}</p>
              </div>
            </div>
            <div class="map-overlay" id="legend"></div>
          </div>
        </div>
      </MapGL>
    );
  }
}
