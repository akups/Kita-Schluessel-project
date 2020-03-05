import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
//import discoverLocales from "../locales/locales.discover.json";

class AddKita extends Component {
  state = {
    name: "",
    district: "",
    address: "",
    postcode: "",
    phoneNumber: "",
    email: "",
    spots: "",
    spotsforunderthree: "",
    spotsforoverthree: "",
    redirect: false
  };

  setFormState = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addNewKita = event => {
    //console.log("WORKING?");
    event.preventDefault();
    //1. post the data to backend -> routes kitas.js
    axios
      .post("/api/addkita/hamburg", {
        name: this.state.name,
        district: this.state.district,
        address: this.state.address,
        postcode: this.state.postcode,
        phoneNumber: this.state.phoneNumber,
        email: this.state.email,
        spots: this.state.spots,
        spotsforunderthree: this.state.spotsforunderthree,
        spotsforoverthree: this.state.spotsforoverthree
      })
      .then(response => {
        this.props.history.push("/discover");
        console.log("this is response", response);
      })
      .catch(err => {
        this.setState({
          message: err.response.data.message
        });
      });
  };

  render() {
    //console.log(this.state);

    if (this.state.redirect) {
      return <Redirect to="/discover/hamburg" />;
    }

    return (
      <div>
        <h1>Add a kita</h1>
        <label htmlFor="name">name:</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.setFormState}
        />
        <label htmlFor="district">District:</label>
        <input
          type="text"
          name="district"
          value={this.state.district}
          onChange={this.setFormState}
        />
        <label htmlFor="address">address:</label>
        <input
          type="text"
          name="address"
          value={this.state.address}
          onChange={this.setFormState}
        />
        <label htmlFor="postcode">postcode</label>
        <input
          type="text"
          name="postcode"
          value={this.state.postcode}
          onChange={this.setFormState}
        />
        <label htmlFor="phoneNumber">phone number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={this.state.phoneNumber}
          onChange={this.setFormState}
        />
        <label htmlFor="email">email:</label>
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.setFormState}
        />
        <label htmlFor="spots">total spots:</label>
        <input
          type="number"
          name="spots"
          value={this.state.spots}
          onChange={this.setFormState}
        />
        <label htmlFor="spotsforunderthree">spots for under three:</label>
        <input
          type="number"
          name="spotsforunderthree"
          value={this.state.spotsforunderthree}
          onChange={this.setFormState}
        />
        <label htmlFor="spotsforoverthree">spots for over three</label>
        <input
          type="number"
          name="spotsforoverthree"
          value={this.state.spotsforoverthree}
          onChange={this.setFormState}
        />
        <button type="submit" onClick={this.addNewKita}>
          submit
        </button>
        {this.state.message && <p>{this.state.message}</p>}
      </div>
    );
  }
}

export default AddKita;
