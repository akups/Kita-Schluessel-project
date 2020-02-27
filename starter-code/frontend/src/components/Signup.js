import React, { Component } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";

class Signup extends Component {
  state = {
    name: "",
    password: "",
    role: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    //1.this is first send a data
    axios
      .post("/auth/signup", {
        username: this.state.username,
        password: this.state.password,
        role: this.state.role
      })
      //3.
      .then(response => {
        this.props.history.push("/");

        this.props.setUser(response.data);
      })
      .catch(err => {
        this.setState({
          message: err.response.data.message
          /* setTimeout(() => {
          this.props.history.push("/");
        }, 3000); */
        });
      });
  };

  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="">Username:</label>
          <input type="text" />
          <label htmlFor="">Password:</label>
          <input type="text" />
          <label htmlFor="">Role:</label>
          <select name="" id="">
            <option value="">Parent</option>
            <option value="">Government</option>
            <option value="">Owner</option>
          </select>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;
