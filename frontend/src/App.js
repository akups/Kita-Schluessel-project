import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MapGL, { Source, Layer } from "react-map-gl";

// app.js
import "mapbox-gl/dist/mapbox-gl.css";

import Navbar from "./components/Navbar.js";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";
import UserPortal from "./components/UserPortal";
import Footer from "./components/Footer.js";
import DiscoverHamburg from "./components/DiscoverHamburg";
import Discover from "./components/Discover.js";
// import Map from "./components/Map.js";
import Detail from "./components/Detail.js";
import TrialMap from "./components/TrialMap";

import DisplayMaps from "./components/DisplayMaps";
import AddKita from "./components/AddKita";
import ProblemBerlin from "./components/ProblemBerlin";
// import DisplayKitas from "./components/DisplayKitas";

class App extends React.Component {
  state = {
    user: this.props.user
  };

  setUser = userObj => {
    this.setState({
      user: userObj
    });
  };

  updatePage = () => {
    this.forceUpdate();
  };

  //Language Switcher
  // changeLang = () => {
  //   const lang = localStorage.getItem("lang");
  //   if (lang === "de") {
  //     localStorage.setItem("lang", "en");
  //   } else if (lang === "en") {
  //     localStorage.setItem("lang", "de");
  //   }
  //   this.forceUpdate();
  // };

  render() {
    //console.log("APP", this.state.user);
    return (
      <div className="App">
        <Navbar
          setUser={this.setUser}
          user={this.state.user}
          updatePage={this.updatePage}
          //This means exporting "updatePage" to Navbar
        />
        {/* <button onClick={this.changeLang}>Change Language</button> */}
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
        <Route exact path="/map" component={DisplayMaps} />
        <Route exact path="/trialmap" component={TrialMap} />
        <Route
          exact
          path="/discover"
          render={props => <Discover {...props} user={this.state.user} />}
        />
        {/* <Route exact path="/discover" component={Discover} /> */}
        <Route exact path="/discover/hamburg" component={DiscoverHamburg} />
        <Route
          exact
          path="/discover/:id"
          render={props => <Detail {...props} user={this.state.user} />}
        />
        <Route exact path="/addkita" component={AddKita} />
        <Route exaxt path="/problem" component={ProblemBerlin} />
        <Footer />
      </div>
    );
  }
}

export default App;
