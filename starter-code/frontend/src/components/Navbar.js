import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import navbarLocales from "../locales/locales.navbar.json";

const Navbar = props => {
  const logout = () => {
    axios.delete("/api/auth/logout").then(() => {
      props.setUser(null);
    });
  };

  const lang = localStorage.getItem("lang");

  if (props.user) {
    return (
      <nav className="navilink">
<<<<<<< HEAD
        <Link to="/">{navbarLocales.home[lang]}</Link>
        <Link to="/data">{navbarLocales.data[lang]}</Link>
        <Link to="/map">{navbarLocales.map[lang]}</Link>
=======
        <Link to="/">Home</Link>
        <Link to="/data">Data&Satistics</Link>
        <Link to="/map">Maps</Link>
        <Link to="/userportal">UserPortal</Link>
>>>>>>> 785934d8cd933eab1433ddcea0dbbd5bc40aedf7
        <Link onClick={logout} to="/">
          Logout
        </Link>
      </nav>
    );
  }
  return (
    <nav>
      <Link to="/">{navbarLocales.home[lang]}</Link>
      <Link to="/data">{navbarLocales.data[lang]}</Link>
      <Link to="/map">{navbarLocales.map[lang]}</Link>
      <Link to="/login">{navbarLocales.login[lang]}</Link>
      <Link to="/signup">{navbarLocales.signup[lang]}</Link>
    </nav>
  );
};

export default Navbar;
