import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import discoverLocales from "../locales/locales.discover.json";

class Discover extends React.Component {
  state = {
    kitas: [],
    search: "",
    select: "---",
    searchedKita: []
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

  searchedName = event => {
    //console.log("<VALUE?>", event.target.value);
    //console.log("<NAME?>", event.target.name);
    this.setState({
      [event.target.name]:
        event.target.type === "select"
          ? event.target.selected
          : event.target.value
    });

    // //console.log(this.state.kitas);
    // const name = event.target.name;
    // const value = event.target.value;
    // //console.log(name);
  };

  render() {
    const search = this.state.search.toLowerCase();
    //const select = this.state.select;
    const filteredKitas = this.state.kitas.filter(kita => {
      return kita.name.toLowerCase().includes(search);
    });
    //console.log("<What's searched Kitas?>", filteredKitas);
    //console.log("<big kita>", Kitas);
    const lang = localStorage.getItem("lang");

    const kita = filteredKitas.map(el => {
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
        <label htmlFor="searchbyname">Search Kita: </label>
        <input
          type="text"
          name="search"
          value={this.state.search}
          onChange={this.searchedName}
          placeholder="search by name"
        />
        <label htmlFor="filterbyviertel">Select: </label>
        <select
          name="select"
          type="select"
          value={this.state.select}
          onChange={this.searchedName}
          selected={this.state.select}
        >
          <option value="--">select</option>
          <option value="">Charlottenburg-Wilmersdorf</option>
          <option value="">Friedrichshain-Kreuzberg</option>
          <option value="">Lichtenberg</option>
          <option value="">Marzahn-Hellersdorf</option>
          <option value="">Mitte</option>
          <option value="">Neukoelln</option>
          <option value="">Pankow</option>
          <option value="">Reinickendorf</option>
          <option value="">Spandau</option>
          <option value="">Steglitz-Zehlendorf</option>
          <option value="">Tempelhof-Schoeneberg</option>
          <option value="">Treptow-Koepenick</option>
        </select>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>Kita Name</th>
              <th>{discoverLocales.neighborhood[lang]}</th>
            </tr>
          </thead>
          {kita}
        </table>
      </div>
    );
  }
}

export default Discover;
