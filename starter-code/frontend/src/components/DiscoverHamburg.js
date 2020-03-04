import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import discoverLocales from "../locales/locales.discover.json";

export default class DiscoverHamburg extends Component {
  state = {
    hamburgKitas: [],
    search: "",
    select: "--",
    searchedKita: []
  };

  componentDidMount() {
    axios.get("/api/discover/hamburg").then(response => {
      this.setState({
        hamburgKitas: response.data.kitas
      });
      console.log("RESPONSE", response.data);
    });
  }

  searchedKita = event => {
    this.setState({
      [event.target.name]:
        event.target.type === "select"
          ? event.target.selected
          : event.target.value
    });
  };

  handleSelect = event => {
    this.setState({ select: event.state.value });
  };
  render() {
    console.log(this.state.hamburgKitas);

    const search = this.state.search.toLowerCase();
    const filteredKitasBySelect = this.state.hamburgKitas.filter(kita => {
      if (this.state.select === "--") {
        return true;
      }
      return kita.kita_suburb === this.state.select;
    });
    const filteredKitas = filteredKitasBySelect.filter(kita => {
      return kita.kita_name.toLowerCase().includes(search);
    });
    // const lang = localStorage.getItem("lang");
    const kita = filteredKitas.map(el => {
      return (
        <tr key={el._id}>
          <Link className="kita-container" to={`/discoverHamburg/${el._id}`}>
            <td>{el.kita_name}</td>
          </Link>
          <td>{el.kita_suburb}</td>
        </tr>
      );
    });
    //

    const suburbs = ["Berlin", "Bonn"];

    // loop through all the kitas and add the unique suburb names

    return (
      <div>
        {/* <h1>{discoverLocales.title[lang]}</h1> */}
        <h1>Discover</h1>
        <label htmlFor="searchbyname">Search Kita</label>
        <input
          type="text"
          name="search"
          value={this.state.search}
          onChange={this.searchedKita}
          placeholder="search by name"
        />
        <label htmlFor="filterbysuburb">Select: </label>
        <select
          name="select"
          type="select"
          value={this.state.select}
          onChange={this.searchedKita}
        >
          {suburbs.map(suburb => (
            <option value={suburb}>{suburb}</option>
          ))}
        </select>
        <tbody className="table">{kita}</tbody>
      </div>
    );
  }
}

// }
