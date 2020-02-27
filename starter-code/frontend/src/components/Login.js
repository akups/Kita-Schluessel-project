import React, { Component } from "react";
//import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="">Username:</label>
          <input type="text" />
          <label htmlFor="">Password:</label>
          <input type="text" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
