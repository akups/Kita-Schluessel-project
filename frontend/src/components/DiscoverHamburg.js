import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import discoverLocales from "../locales/locales.discover.json";

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
    const lang = localStorage.getItem("lang");
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

    const suburbs = new Set();
    const kita = filteredKitas.map(el => {
      suburbs.add(el.kita_suburb);
      return (
        <tr key={el._id}>
          <Link className="kita-container" to={`/discoverHamburg/${el._id}`}>
            <td>{el.kita_name}</td>
          </Link>
          <td>{el.kita_suburb}</td>
        </tr>
      );
    });
    //ˇ
    // // loop through all the kitas and add the unique suburb names

    // for (let i = 0; i < kita.length; i++) {
    //   console.log(kita[i].kita_suburb);
    // }
    if (this.props.user.role === "government") {
      return (
        <div>
          <h1>{discoverLocales.title[lang]}</h1>
          <Link to="/addkita/hamburg">
            <button>Add new kita</button>
          </Link>
          <label htmlFor="searchbyname">Search Kita</label>
          <input
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.searchedKita}
            placeholder="search by name"
          />
          <label htmlFor="filterbysuburb">Select your Suburb: </label>
          <select
            size="3"
            name="select"
            type="select"
            value={this.state.select}
            onChange={this.searchedKita}
          >
            {[...suburbs].map((
              suburb //the suburbs created by new set is an object but we can't map through an object so we spread it in order to map through for our select
            ) => (
              <option value={suburb}>{suburb}</option>
            ))}
          </select>
          <tbody className="table">
            <th>{discoverLocales.name[lang]}</th>
            <th>{discoverLocales.suburb[lang]}</th>
            {kita}
          </tbody>
        </div>
      );
    }

    return (
      <div>
        <h1>{discoverLocales.title[lang]}</h1>

        <label htmlFor="searchbyname">Search Kita</label>
        <input
          type="text"
          name="search"
          value={this.state.search}
          onChange={this.searchedKita}
          placeholder="search by name"
        />
        <label htmlFor="filterbysuburb">Select your Suburb: </label>
        <select
          size="3"
          name="select"
          type="select"
          value={this.state.select}
          onChange={this.searchedKita}
        >
          {[...suburbs].map((
            suburb //the suburbs created by new set is an object but we can't map through an object so we spread it in order to map through for our select
          ) => (
            <option value={suburb}>{suburb}</option>
          ))}
        </select>
        <tbody className="table">
          <th>{discoverLocales.name[lang]}</th>
          <th>{discoverLocales.suburb[lang]}</th>
          {kita}
        </tbody>
      </div>
    );
  }
}

// }
