import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import discoverLocales from "../locales/locales.discover.json";

class Discover extends React.Component {
  state = {
    kitas: []
  };

  //1. From frontend, axios request a kita data-> route kitas.js
  componentDidMount() {
    axios.get("/api/discover").then(response => {
      //console.log(response.data.kitas);
      this.setState({
        kitas: response.data.kitas
      });
    });
  }

  render() {
    const lang = localStorage.getItem("lang");
    // const kitaRow = () => {
    //   return (
    //     <tr>
    //       <td>{this.state.kitas.name}</td>
    //       <td>{this.state.kitas.viertel}</td>
    //     </tr>
    //   );
    // };

    // const kitaTable = () => {
    //   return (
    //     <table>
    //       <thead>
    //         <tr>
    //           <th>Name</th>
    //           <th>Viertel</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {this.state.kitas.map(el => {
    //           return (
    //             <Link className="kita-container" to={`/discover/${el._id}`}>
    //               <tr>
    //                 <td>{el.name}</td>
    //                 <td>{el.viertel}</td>
    //               </tr>
    //             </Link>
    //           );
    //         })}
    //       </tbody>
    //     </table>
    //   );
    // };

    const Kitas = this.state.kitas.map(el => {
      return (
        <tbody>
          <tr key={el._id}>
            <Link className="kita-container" to={`/discover/${el._id}`}>
              <td>{el.name}</td>
            </Link>

            <td>{el.viertel}</td>
          </tr>
        </tbody>
      );
    });

    return (
      <div>
        <h1>{discoverLocales.title[lang]}</h1>
        <table>
          <thead>
            <tr>
              <th>Kita Name</th>
              <th>{discoverLocales.neighborhood[lang]}</th>
            </tr>
          </thead>
          {Kitas}
        </table>
      </div>
    );
  }
}

export default Discover;
