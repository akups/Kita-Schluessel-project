import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import loginLocales from "../locales/locales.login.json";

class Login extends Component {
  state = {
    email: "",
    password: ""

    // redirect: false
  };

  handleSubmit = event => {
    event.preventDefault();
    //1)

    axios
      .post("/api/auth/login", {
        email: this.state.email,
        password: this.state.password
      })
      //3)
      .then(response => {
        //console.log("loginuser", response.data);
        // this.setState({
        //   redirect: false
        // });
        this.props.setUser(response.data);
        this.props.history.push("/userportal");
      })
      .catch(err => {
        console.log(err);
        //console.log(err.response.data.message);
        // this.setState({
        //   message: err.response.data.message
        // });
      });
  };

  setFormState = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const lang = localStorage.getItem("lang");

    // if (this.state.redirect) {
    //   return <Redirect to="/userportal" />;
    // }
    return (
      <div className="login">
        <h1>{loginLocales.title[lang]}</h1>
        <p>{loginLocales.prompt[lang]}</p>
        <div className="login-form">
          <form>
            <label htmlFor="email">{loginLocales.email[lang]}</label>
            <input
              type="text"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.setFormState}
            />
            <label htmlFor="password">{loginLocales.password[lang]}</label>
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.setFormState}
            />
            <button onClick={this.handleSubmit}>
              {loginLocales.login[lang]}
            </button>
          </form>
        </div>
        {this.state.message && <p>{this.state.message}</p>}
      </div>
    );
  }
}
export default Login;
