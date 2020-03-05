import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import detailsLocales from "../locales/locales.details.json";

class Detail extends Component {
  state = {
    kitas: false
  };

  componentDidMount() {
    const kitaId = this.props.match.params.id;
    axios.get("/api/discover/:id").then(response => {
      //console.log(response.data.kitas);

      let found = response.data.kitas.find(kita => {
        return kita._id === kitaId;
      });
      //console.log(found);
      this.setState({
        kitas: found
      });
    });
  }

  //delete kita
  deleteKita = event => {
    event.preventDefault();
    const deleteKitaId = this.props.match.params.id;
    //console.log("deleteKita?", deleteKitaId);
    axios.delete(`/api/discover/${deleteKitaId}/delete`).then(response => {
      this.props.history.push("/discover");
      //console.log("DETAIL?", response);
    });
  };

  render() {
    //console.log("FOUND?", this.state.kitas);
    const lang = localStorage.getItem("lang");

    if (!this.state.kitas) {
      return <h1></h1>;
    }

    if (this.props.user.role === "government") {
      return (
        <div className="detail-container">
          <img height="200px" width="200px" src="/image/kitaimage.png" alt="" />
          <div className="detail-container-text">
            <h1>{this.state.kitas.name}</h1>
            <h3>{detailsLocales.address[lang]}</h3>
            <p>{this.state.kitas.adresse}</p>
            <h3>{detailsLocales.postcode[lang]}:</h3>
            <p>{this.state.kitas.postleitzahl}</p>
            <h3>{detailsLocales.city[lang]}</h3>
            <p>{this.state.kitas.stadt}</p>
            <h3>{detailsLocales.phone[lang]}</h3>
            <p>
              <a href={"tel:" + this.state.kitas.telefon}>
                {this.state.kitas.telefon}
              </a>
            </p>
            <h3>{detailsLocales.email[lang]}</h3>
            <p>
              <a href={"mailto:" + this.state.kitas.email}>
                {this.state.kitas.email}
              </a>
            </p>
          </div>
          <button onClick={this.deleteKita}>delete kita</button>
          <Link to="/discover">
            <button>{detailsLocales.return[lang]}</button>
          </Link>
        </div>
      );
    }

    //console.log("DETAILS?", this.props.user.role);
    return (
      <div className="detail-container">
        <img height="200px" width="200px" src="/image/kitaimage.png" alt="" />
        <h1>{this.state.kitas.name}</h1>
        <h3>{detailsLocales.address[lang]}</h3>
        <p>{this.state.kitas.adresse}</p>
        <h3>{detailsLocales.postcode[lang]}:</h3>
        <p>{this.state.kitas.postleitzahl}</p>
        <h3>{detailsLocales.city[lang]}</h3>
        <p>{this.state.kitas.stadt}</p>
        <h3>{detailsLocales.phone[lang]}</h3>
        <p>
          <a href={"tel:" + this.state.kitas.telefon}>
            {this.state.kitas.telefon}
          </a>
        </p>
        <h3>{detailsLocales.email[lang]}</h3>
        <p>
          <a href={"mailto:" + this.state.kitas.email}>
            {this.state.kitas.email}
          </a>
        </p>

        <Link to="/discover">
          <button>{detailsLocales.return[lang]}</button>
        </Link>
      </div>
    );
  }
}

export default Detail;
