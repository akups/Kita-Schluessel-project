import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Detail extends Component {
  state = {
    kitas: []
  };

  componentDidMount() {
    const kitaId = this.props.match.params.id;
    axios.get("/api/discover/:id").then(response => {
      //console.log(response.data.kitas);

      let found = response.data.kitas.find(kita => {
        return kita._id === kitaId;
      });
      //console.log(found);
      this.setState({
        kitas: found
      });
    });
  }

  render() {
    console.log("FOUND?", this.state.kitas);
    return (
      <div>
        <h1>Kita detail</h1>
        <img height="200px" width="200px" src="/image/kitaimage.png" alt="" />
        <h2>{this.state.kitas.name}</h2>
        <p>{this.state.kitas.adresse}</p>
        <Link to="/discover">
          <button>go back to discover</button>
        </Link>
      </div>
    );
  }
}

export default Detail;
