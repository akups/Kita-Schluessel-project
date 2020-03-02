import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Discover extends Component {
  state = {
    kitas: []
  };

  componentDidMount() {
    axios.get("https://localhost:27017/backend").then(response => {
      console.log(response.data);
      this.setState({
        kitas: response.data
      });
    });
  }

  render() {
    const Kitas = this.state.kitas.map(el => {
      return (
        <Link className="kita-container" to={`/kitas/${el._id}`}>
          <h2>{el.name}</h2>
          <p>{el.description}</p>
        </Link>
      );
    });
    return Kitas;
  }
}

export default Discover;
