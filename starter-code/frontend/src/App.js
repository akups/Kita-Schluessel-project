import React from "react";

import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MapGL, { Source, Layer } from "react-map-gl";
import Map from "./components/Map";
// app.js
import "mapbox-gl/dist/mapbox-gl.css";

import Navbar from "./components/Navbar.js";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";
import UserPortal from "./components/UserPortal";
import Footer from "./components/Footer.js";

import Discover from "./components/Discover.js";
// import Map from "./components/Map.js";
import Detail from "./components/Detail.js";

class App extends React.Component {
  state = {
    user: this.props.user
  };

  setUser = userObj => {
    this.setState({
      user: userObj
    });
  };

  // Language Switcher
  changeLang = () => {
    const lang = localStorage.getItem("lang");
    if (lang === "de") {
      localStorage.setItem("lang", "en");
    } else if (lang === "en") {
      localStorage.setItem("lang", "de");
    }
    this.forceUpdate();
  };

  render() {
    return (
      <div className="App">
        <Navbar setUser={this.setUser} user={this.state.user} />
        <button onClick={this.changeLang}>Change Language</button>
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
        <Route exact path="/map" component={Map} />
        {/* <Route exact path="/map" component={Map} /> */}
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/discover/:id" component={Detail} />
        <Footer />
      </div>
    );
  }
}

export default App;
