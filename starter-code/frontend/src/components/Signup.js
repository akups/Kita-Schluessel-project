import React, { Component } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    email: "",
    role: ""
  };


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    //1.this is first send a data
    axios
      .post("/auth/signup", {
        name: this.state.name,
        password: this.state.password,
        email: this.state.email,
        role: this.state.role
      })
      //3.
      .then(response => {
        this.props.history.push("/");

<<<<<<< HEAD
  //         this.props.setUser(response.data);
  //       })
  //       .catch(err => {
  //         this.setState({
  //           message: err.response.data.message
  //           /* setTimeout(() => {
  //           this.props.history.push("/");
  //         }, 3000); */
  //         });
  //       });
  //   };
=======
  handleSubmit = event => {
    event.preventDefault();
    console.log("eventtarget", this.state);

    axios
      .post("/api/auth/signup", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        role: this.state.role
      })
      .then(response => {
        console.log("RSPONSE", response);

        //this.props.history.push("/");

        //this.props.setUser(this.response.data);
=======
        this.props.setUser(response.data);
>>>>>>> f9f9160c96d05acf545ae18714417ef66412d9d4
      })
      .catch(err => {
        this.setState({
          message: err.response.data.message
<<<<<<< HEAD
        });
      });
  };

  setFormState = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onChange = event => {
    this.setState({ role: event.target.value });
  };
>>>>>>> akua
=======
          /* setTimeout(() => {
            this.props.history.push("/");
          }, 3000); */
        });
      });
  };
>>>>>>> f9f9160c96d05acf545ae18714417ef66412d9d4

  render() {
    return (
      <div>
<<<<<<< HEAD
        <form onClick={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label htmlFor="">Password:</label>
          <input
            type="text"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <label htmlFor="email">email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
=======
        <form action="">
          <label htmlFor="">Name:</label>
          <input
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.setFormState}
            type="text"
          />
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            id="email"
            type="text"
            value={this.state.email}
            onChange={this.setFormState}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.setFormState}
>>>>>>> akua
          />
          <label htmlFor="role">Role:</label>
          <select
            name="role"
<<<<<<< HEAD
            id="role"
            value={this.state.role}
            onChange={this.handleChange}
          >
            <option value="">Parent</option>
            <option value="">Government</option>
            <option value="">Owner</option>
=======
            value={this.state.role}
            onChange={this.onChange}
            id="role"
          >
            <option>parent</option>
            <option>government</option>
            <option>owner</option>
>>>>>>> akua
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;
