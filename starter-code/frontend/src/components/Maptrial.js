// import React from "react";
// import { render } from "react-dom";
// import { Map, Marker, Popup, TileLayer } from "react-leaflet";
// import stadtteile from "../data/hamburg_kitas.geojson";
// import kitas from "../data/kitas.geojson";

// class SimpleExample extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       lat: 53.57532,
//       lng: 10.01534,
//       zoom: 10.45
//     };
//   }

//   render() {
//     const position = [this.state.lat, this.state.lng];

//     return (
//       <Map center={position} zoom={this.state.zoom}>
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
//         />

//         {/* <Marker position={position}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker> */}
//       </Map>
//     );
//   }
// }

// export default SimpleExample;

// // export default Signup;
// // <!-- Bereich / Abteilung für unsere Karte -->
// // <div id="karte" style="width: 600; height: 650px"></div>
// // <!-- Jetzt gehts ab // Dynamischen Karteninhalte javascript -->
// // <script>
// // // [variablename] = bibliothek.objekt(div).methode (parameter)
// // var map = L.map("karte",{ center:[53.57532, 10.01534],zoom: 10.45,
// // fullscreenControl: true
// // });
// //  // zoomstufe 0-18 OSM
// //  // Syn tax L.object (seiten element, {optionen}).methode
// //  // Grundkarte OSM
// // var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?',
// // {attribution: 'Map Data &copy; <a href="https://www.openstreetmap.de/">OpenStreetMap</a>'})
// // .addTo(map);
