import React, { Component } from "react";
import { Link } from "react-router-dom";
import problemLocales from "../locales/locales.problem.json";

class ProblemBerlin extends Component {
  render() {
    const lang = localStorage.getItem("lang");
    return (
      <div>
        {/* <h2>{problemLocales.hamburg[lang]}</h2> */}
        <h2>{problemLocales.headinghamburg[lang]}</h2>
        <br />
        <img width="800px" src="/image/relationhh.png" alt="" />
        <br />
        <h2>{problemLocales.forecasthh[lang]}</h2>
        <br />
        <img width="800px" src="/image/prognseHH.png" alt="" />
      </div>
    );
  }
}

export default ProblemBerlin;
