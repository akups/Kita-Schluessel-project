import React, { Component } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    role: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("eventtarget", this.state);

    axios
      .post("/api/auth/signup", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        role: this.state.role
      })
      .then(response => {
        console.log("RSPONSE", response);

        //this.props.history.push("/");

        //this.props.setUser(this.response.data);
      })
      .catch(err => {
        this.setState({
          message: err.response.data.message
        });
      });
  };

  setFormState = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onChange = event => {
    this.setState({ role: event.target.value });
  };

  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="">Name:</label>
          <input
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.setFormState}
            type="text"
          />
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            id="email"
            type="text"
            value={this.state.email}
            onChange={this.setFormState}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.setFormState}
          />
          <label htmlFor="role">Role:</label>
          <select
            name="role"
            value={this.state.role}
            onChange={this.onChange}
            id="role"
          >
            <option>parent</option>
            <option>government</option>
            <option>owner</option>
          </select>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;
