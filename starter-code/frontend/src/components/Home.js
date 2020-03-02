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
        <div className="img-component">
          <img src="image/photo-1540479859555-17af45c78602.jpeg" alt="" />
        </div>
        <div className="text-component">
          <h1>KitaSchlüssel</h1>
          <p>{homeLocales.selectcity[lang]}</p>
          <button>Berlin</button>
          <button>Hamburg</button>
          <Link to="/signup">
            <button>{homeLocales.signup[lang]}</button>
          </Link>
          <p>
            <Link className="link" to="/login">
             {homeLocales.login[lang]}
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
