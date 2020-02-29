import React from "react";

import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MapGL, { Source, Layer } from "react-map-gl";
// app.js
import "mapbox-gl/dist/mapbox-gl.css";

import Navbar from "./components/Navbar.js";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";

import UserPortal from "./components/UserPortal";

import Discover from "./components/Discover.js";
// import Map from "./components/Map.js";

class App extends React.Component {
  state = {
    user: this.props.user
  };

  setUser = userObj => {
    this.setState({
      user: userObj
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar setUser={this.setUser} user={this.state.user} />
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/signup"
          render={props => (
            <Signup
              history={props.history}
              user={this.state.user}
              setUser={this.setUser}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={props => (
            <Login history={props.history} setUser={this.setUser} />
          )}
        />
        <Route
          exact
          path="/userportal"
          render={props => <UserPortal {...props} user={this.state.user} />}
        />
      </div>
    );
  }
}

export default App;
