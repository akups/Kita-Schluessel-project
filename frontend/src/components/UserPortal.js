import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import portalLocales from "../locales/locales.portal.json";

class UserPortal extends Component {
  state = {
    name: ""
  };

  render() {
    const lang = localStorage.getItem("lang");
    //console.log("USER", this.props.user);
    return (
      <div className="portal-container">
        <h1>
          {portalLocales.greeting[lang]} {this.props.user.name}!
        </h1>
        <article>{portalLocales.article[lang]}</article>
        <p></p>
        <Link to="/discover">
          <button>{portalLocales.discover[lang]}</button>
        </Link>
        <Link to="/map">
          <button>{portalLocales.map[lang]}</button>
        </Link>
        <Link to="/discover/hamburg">
          <button>{portalLocales.hamburg[lang]}</button>
        </Link>
      </div>
    );
  }
}

export default UserPortal;
