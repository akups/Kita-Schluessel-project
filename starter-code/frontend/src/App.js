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
        <Navbar />
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
        <Route exact path="/login" component={Login} />
        <Route exact path="/map" component={Map} />
      </div>
    );
  }
}

export default App;
