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
        <Link to="/">{navbarLocales.home[lang]}</Link>
        <Link to="/data">{navbarLocales.data[lang]}</Link>
        <Link to="/map">{navbarLocales.map[lang]}</Link>
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
