import React, { Component } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    role: "parent"
  };

  // handleSubmit = event => {
  //   event.preventDefault();

  //1.this is first send a data
  // axios
  //   .post("/auth/signup", {
  //     name: this.state.name,
  //     password: this.state.password,
  //     email: this.state.email,
  //     role: this.state.role
  //   })
  //   //3.
  //   .then(response => {
  //     this.props.history.push("/");

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

  // handleSubmit = event => {
  //   event.preventDefault();

  //1.this is first send a data
  // axios
  //   .post("/auth/signup", {
  //     name: this.state.name,
  //     password: this.state.password,
  //     email: this.state.email,
  //     role: this.state.role
  //   })
  //   //3.
  //   .then(response => {
  //     this.props.history.push("/");

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

  handleSubmit = event => {
    event.preventDefault();
    console.log("eventtarget", this.state);

    //1.this is first send a data
    axios
      .post("/api/auth/signup", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        email: this.state.email,
        role: this.state.role
      })
      //3.
      .then(response => {
        console.log("RSPONSE", response);

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
              this.props.setUser(response.data);
            })
            .catch(err => {
              this.setState({
                message: err.response.data.message
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

        /* setTimeout(() => {
            this.props.history.push("/");
          }, 3000); */
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

  /* setTimeout(() => {
            this.props.history.push("/");
          }, 3000); */

  render() {
    return (
      <div>
        <div>
          <form onClick={this.handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.setFormState}
            />

            <label htmlFor="">Password:</label>
            <input
              type="text"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.setFormState}
            />
            <label htmlFor="email">email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.setFormState}
            />
          </form>
        </div>
        <div>
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
            />
            <label htmlFor="role">Role:</label>
            <select
              name="role"
              id="role"
              value={this.state.role}
              onChange={this.setFormState}
            >
              <option value="">Parent</option>
              <option value="">Government</option>
              <option value="">Owner</option>

              {/* <option
                value={this.state.role}
                onChange={this.onChange}
                id="role"
              /> */}
              <option>parent</option>
              <option>government</option>
              <option>owner</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
