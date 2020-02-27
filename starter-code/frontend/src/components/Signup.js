import React, { Component } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";

class Signup extends Component {
  state = {
    name: "",
    password: "",
    email: "",
    role: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //   handleSubmit = event => {
  //     event.preventDefault();

  //     //1.this is first send a data
  //     axios
  //       .post("/auth/signup", {
  //         name: this.state.name,
  //         password: this.state.password,
  //         email: this.state.email,
  //         role: this.state.role
  //       })
  //       //3.
  //       .then(response => {
  //         this.props.history.push("/");

  //         this.props.setUser(response.data);
  //       })
  //       .catch(err => {
  //         this.setState({
  //           message: err.response.data.message
  //           /* setTimeout(() => {
  //           this.props.history.push("/");
  //         }, 3000); */
  //         });
  //       });
  //   };

  render() {
    return (
      <div>
        <form onClick={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label htmlFor="">Password:</label>
          <input
            type="text"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <label htmlFor="email">email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="role">Role:</label>
          <select
            name="role"
            id="role"
            value={this.state.role}
            onChange={this.handleChange}
          >
            <option value="">Parent</option>
            <option value="">Government</option>
            <option value="">Owner</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;
