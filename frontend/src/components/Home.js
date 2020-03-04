import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import homeLocales from "../locales/locales.home.json";

class Home extends Component {
  /* select = () => {
    obj = document.test.linkselect;

    index = obj.selectedIndex;
    if (index != 0) {
      href = obj.options[index].value;
      location.href = href;
    }
  }; */

  render() {
    const lang = localStorage.getItem("lang");
    return (
      <div className="home-component">
          <h1>KitaSchlüssel</h1>
          <p>{homeLocales.connect[lang]}</p>
          <div className="home-buttons">
            <Link to="/map">
              <button className="home-map">{homeLocales.view[lang]}</button>
            </Link>
            <Link to="/signup">
              <button className="home-signup">
                {homeLocales.signup[lang]}
              </button>
            </Link>
          </div>
          <p>
            <Link className="login-link" to="/login">
              {homeLocales.login[lang]}
            </Link>
          </p>
        </div>
    );
  }
}

export default Home;
