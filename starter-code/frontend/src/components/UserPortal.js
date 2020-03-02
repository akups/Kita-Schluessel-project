import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";

class UserPortal extends Component {
  state = {
    name: ""
  };

  render() {
    console.log("USER", this.props.user);
    return (
      <div>
        <h1>hello</h1>
        <article>Check out what's new</article>
        <p></p>
        <Link to="/discover">
          <button>Discover</button>
        </Link>
        <Link to="/map">
          <button>Map</button>
        </Link>
      </div>
    );
  }
}

export default UserPortal;
