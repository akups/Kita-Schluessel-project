import React, { Component } from "react";
import ProblemBerlin from "./ProblemBerlin";
import ProblemHamburg from "./ProblemHamburg";

export default class DisplayProblem extends Component {
  state = {
    displayBerlin: true
  };

  handlechangeProblem = event => {
    event.preventDefault();
    this.setState({
      displayBerlin: !this.state.displayBerlin
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handlechangeProblem}>
          {this.state.displayBerlin ? "Hamburg" : "Berlin"}
        </button>
        {this.state.displayBerlin ? <ProblemBerlin /> : <ProblemHamburg />}
      </div>
    );
  }
}
