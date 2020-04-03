import React, { Component } from "react";
import HamburgMap from "./HamburgMap_withData";
import BerlinMap from "./BerlinMap_withData";

export default class DisplayMaps extends Component {
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
        {this.state.displayBerlin ? <BerlinMap /> : <HamburgMap />}
      </div>
    );
  }
}
