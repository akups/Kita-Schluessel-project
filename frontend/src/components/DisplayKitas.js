import React, { Component } from "react";
import Discover from "./Discover";
import DiscoverHamburg from "./DiscoverHamburg";

export default class DisplayKitas extends Component {
  state = {
    displayBerlin: true
  };

  handlechangeMap = event => {
    event.preventDefault();
    this.setState({
      displayBerlin: !this.state.displayBerlin
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handlechangeMap}>
          {this.state.displayBerlin ? "Hamburg" : "Berlin"}
        </button>
        {this.state.displayBerlin ? <Discover /> : <DiscoverHamburg />}
      </div>
    );
  }
}
