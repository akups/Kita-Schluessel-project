import React, { Component } from "react";
import { Link } from "react-router-dom";
import problemLocales from "../locales/locales.problem.json";

class ProblemBerlin extends Component {
  render() {
    const lang = localStorage.getItem("lang");
    return (
      <div className="problem-container">
        <h1>{problemLocales.title[lang]}</h1>

        <img width="400px" src="/image/relationber.png" alt="" />
        <img width="400px" src="/image/prognose_ber.png" alt="" />
      </div>
    );
  }
}

export default ProblemBerlin;
