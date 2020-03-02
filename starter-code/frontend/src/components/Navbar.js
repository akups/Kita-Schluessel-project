import React, { useState } from "react";
// import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import navbarLocales from "../locales/locales.navbar.json";

const Navbar = props => {
  const [img, setImage] = useState("/image/germany.png");

  const imageChange = () => {
    //console.log("imagechange");
    const lang = localStorage.getItem("lang");
    if (img === "/image/uk.png" && lang === "en") {
      setImage("/image/germany.png");
      localStorage.setItem("lang", "de");
    } else if (img === "/image/germany.png" && lang === "de") {
      setImage("/image/uk.png");
      localStorage.setItem("lang", "en");
    }
  };

  // const imageChange = () => {
  //   //console.log("imagechange");
  //   const lang = localStorage.getItem("lang");
  //   if (img === "/image/uk.png") {
  //     setImage("/image/germany.png");
  //   } else if (img === "/image/germany.png") {
  //     setImage("/image/uk.png");
  //   }
  // };

  // const changeLang = () => {
  //   console.log("Changing lang");
  //   const lang = localStorage.getItem("lang");
  //   if (lang === "de") {
  //     localStorage.setItem("lang", "en");
  //   } else if (lang === "en") {
  //     localStorage.setItem("lang", "de");
  //   }
  // };

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
          {navbarLocales.logout[lang]}
        </Link>
        <img onClick={imageChange} height="30px" src={img} alt="" />
        <Link to="/userportal">
          <img height="30px" src="/image/user.png" alt="" />
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
