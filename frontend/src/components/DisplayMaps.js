import React, { Component } from "react";
import Map from "./Map";
import BerlinMap from "./BerlinMap";

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
        {this.state.displayBerlin ? <BerlinMap /> : <Map />}
      </div>
    );
  }
}
