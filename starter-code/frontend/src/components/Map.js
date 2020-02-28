import React from "react";
import { render } from "react-dom";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const position = [53.57532, 10.01534];
const map = (
  <Map center={position} zoom={13}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup.
        <br />
        Easily customizable.
      </Popup>
    </Marker>
  </Map>
);

render(map, document.getElementById("map-container"));

// export default Signup;
// <!-- Bereich / Abteilung für unsere Karte -->
// <div id="karte" style="width: 600; height: 650px"></div>
// <!-- Jetzt gehts ab // Dynamischen Karteninhalte javascript -->
// <script>
// // [variablename] = bibliothek.objekt(div).methode (parameter)
// var map = L.map("karte",{ center:[53.57532, 10.01534],zoom: 10.45,
// fullscreenControl: true
// });
//  // zoomstufe 0-18 OSM
//  // Syn tax L.object (seiten element, {optionen}).methode
//  // Grundkarte OSM
// var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?',
// {attribution: 'Map Data &copy; <a href="https://www.openstreetmap.de/">OpenStreetMap</a>'})
// .addTo(map);
