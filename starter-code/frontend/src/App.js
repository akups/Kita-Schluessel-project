import React from "react";

import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

import Navbar from "./components/Navbar.js";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
