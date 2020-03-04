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
  "-260-100",
  "100-200",
  "200-400",
  "400-600",
  "600-800",
  "800-1000",
  "1000-1500",
  "1500-2000",
  "2000-2500",
  "2500-4509"
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
      }
    };
    // this.renderPopup = this.renderPopup.bind(this);
  }
  drawLegends = () => {
    return layers.map((layer, i) => {
      const color = colors[i];
      return (
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-between",
            width: 120
          }}
        >
          <span
            className="legend-key"
            style={{
              display: "inline-block",
              width: "25px",
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
    // console.log("lang", mapLocales, lang);
    return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/akup21/ck7dbfd500pvk1ikikrq0r7eo"
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
                width: 200,
                height: 150,
                backgroundColor: "white",
                border: 20
              }}
            >
              <h2>Hamburg {mapLocales.kitas[lang]}</h2>
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
