import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = props => {
  const logout = () => {
    axios.delete("/api/auth/logout").then(() => {
      props.setUser(null);
    });
  };

  if (props.user) {
    return (
      <nav className="navilink">
        <Link to="/">Home</Link>
        <Link to="/data">Data&Satistics</Link>
        <Link to="/map">Maps</Link>
        <Link to="/userportal">UserPortal</Link>
        <Link onClick={logout} to="/">
          Logout
        </Link>
      </nav>
    );
  }
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/data">Data&Satistics</Link>
      <Link to="/map">Maps</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
};

export default Navbar;
