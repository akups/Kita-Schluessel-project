import React, { Component } from "react";
import { Link } from "react-router-dom";
import problemLocales from "../locales/locales.problem.json";

class ProblemBerlin extends Component {
  render() {
    const lang = localStorage.getItem("lang");
    return (
      <div className="problem-container">
        {/* <h1>{problemLocales.title[lang]}</h1> */}
        <h2>{problemLocales.headingberlin[lang]}</h2>
        <br />
        <img width="800px" src="/image/relationber.png" alt="" />
        <br />
        <h2>{problemLocales.forecastb[lang]}</h2>
        <br />
        <img width="800px" src="/image/prognose_ber.png" alt="" />
      </div>
    );
  }
}

export default ProblemBerlin;
