import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { SignUpPOST } from "../../Constants";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      emailid: "",
      password: "",
      isRegistered: false,
    };
    this.onRegister = this.onRegister.bind(this);
    this.userRegister = this.userRegister.bind(this);
  }

  onRegister = (event) => {
    event.preventDefault();

    const newUser = {
      emailid: this.state.emailid,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      password: this.state.password,
    };

    axios.post(SignUpPOST, newUser).then((response) => {
      if (response.status === 200) {
        this.setState({ isRegistered: true });
      }
    });
  };

  userRegister = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { emailid, firstname, lastname, password, isRegistered } = this.state;
    if (isRegistered) {
      return <Redirect to={{ pathname: "/sign-in" }} />;
    }
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={this.onRegister}>
            <h3>Sign Up</h3>

            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                name="firstname"
                value={firstname}
                onChange={this.userRegister}
              />
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                name="lastname"
                value={lastname}
                onChange={this.userRegister}
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="emailid"
                value={emailid}
                onChange={this.userRegister}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={this.userRegister}
              />
            </div>
            <p></p>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={this.onRegister}
            >
              Sign Up
            </button>
            <p className="forgot-password text-right">
              Already registered <Link to="/sign-in">sign in?</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
