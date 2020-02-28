import React from "react";

import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

import Navbar from "./components/Navbar.js";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";
import Discover from "./components/Discover.js";

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
      </div>
    );
  }
}

export default App;
