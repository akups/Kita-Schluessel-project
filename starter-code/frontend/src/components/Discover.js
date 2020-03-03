import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import discoverLocales from "../locales/locales.discover.json";

class Discover extends React.Component {
  state = {
    kitas: [],
    search: "",
    select: "--",
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

  handleSelect = event => {
    this.setState({ select: event.target.value });
  };

  render() {
    console.log(this.state.select);

    const search = this.state.search.toLowerCase();
    //const select = this.state.select;

    const filteredKitasBySelect = this.state.kitas.filter(kita => {
      if (this.state.select === "--") {
        return true;
      }
      return kita.viertel === this.state.select;
    });

    const filteredKitas = filteredKitasBySelect.filter(kita => {
      return kita.name.toLowerCase().includes(search);
    });
    //console.log("<What's searched Kitas?>", filteredKitas);
    //console.log("<big kita>", Kitas);
    const lang = localStorage.getItem("lang");

    const kita = filteredKitas.map(el => {
      return (
        <tbody key={el._id}>
          <tr>
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
          // selected={this.state.select}
        >
          <option value="--">select</option>
          <option value="Charlottenburg-Wilmersdorf">
            Charlottenburg-Wilmersdorf
          </option>
          <option value="Friedrichshain-Kreuzberg">
            Friedrichshain-Kreuzberg
          </option>
          <option value="Lichtenberg">Lichtenberg</option>
          <option value="Marzahn-Hellersdorf">Marzahn-Hellersdorf</option>
          <option value="Mitte">Mitte</option>
          <option value="Neukoelln">Neukoelln</option>
          <option value="Pankow">Pankow</option>
          <option value="Reinickendorf">Reinickendorf</option>
          <option value="Spandau">Spandau</option>
          <option value="Steglitz-Zehlendorf">Steglitz-Zehlendorf</option>
          <option value="Tempelhof-Schoeneberg">Tempelhof-Schoeneberg</option>
          <option value="Treptow-Koepenick">Treptow-Koepenick</option>
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
