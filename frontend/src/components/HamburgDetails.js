import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import detailsLocales from "../locales/locales.details.json";

class HamburgDetails extends Component {
  state = {
    kitas: false
  };

  componentDidMount() {
    const kitaId = this.props.match.params.id;
    axios.get(`/api/discover/hamburg/${kitaId}`).then(response => {
      //console.log(response.data.kitas);
      console.log(response.data);
      this.setState({
        kitas: response.data
      });
    });
  }

  //delete kita
  deleteKita = event => {
    event.preventDefault();
    const deleteKitaId = this.props.match.params.id;
    //console.log("deleteKita?", deleteKitaId);
    axios
      .delete(`/api/discover/hamburg${deleteKitaId}/delete`)
      .then(response => {
        this.props.history.push("/discover/hamburg");
        //console.log("DETAIL?", response);
      });
  };

  render() {
    //console.log("FOUND?", this.state.kitas);
    const lang = localStorage.getItem("lang");

    if (!this.state.kitas) {
      return <h1>LOADING</h1>;
    }
    console.log(this.state.kitas);
    if (this.props.user.role === "government") {
      return (
        <div className="detail-container">
          <img height="200px" width="200px" src="/image/kitaimage.png" alt="" />
          <h1>{this.state.kitas.kita_name}</h1>
          <h3>{detailsLocales.address[lang]}</h3>
          <p>{this.state.kitas.kita_address}</p>
          {/* <h3>{detailsLocales.postcode[lang]}:</h3> */}
          <p>{this.state.kitas.plz}</p>
          {/* <h3>{detailsLocales.stadteil[lang]}</h3> */}
          <p>{this.state.kitas.kita_suburb}</p>
          {/* <h3>{detailsLocales.phone[lang]}</h3> */}

          <button onClick={this.deleteKita}>delete kita</button>
          <Link to="/discover/hamburg">
            <button>{detailsLocales.return[lang]}</button>
          </Link>
        </div>
      );
    }

    //console.log("DETAILS?", this.props.user.role);
    return (
      <div className="detail-container">
        <img height="200px" width="200px" src="/image/kitaimage.png" alt="" />
        <h1>{this.state.kitas.kita_name}</h1>
        <h3>{detailsLocales.address[lang]}</h3>
        <p>{this.state.kitas.adresse}</p>
        <h3>{detailsLocales.postcode[lang]}:</h3>
        <p>{this.state.kitas.postleitzahl}</p>
        <h3>{detailsLocales.city[lang]}</h3>
        <p>{this.state.kitas.stadt}</p>
        <h3>{detailsLocales.phone[lang]}</h3>

        <Link to="/discover/hamburg">
          <button>{detailsLocales.return[lang]}</button>
        </Link>
      </div>
    );
  }
}

export default HamburgDetails;
