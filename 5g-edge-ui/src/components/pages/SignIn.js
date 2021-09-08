import React, { Component } from "react";
import axios from "axios";
import "../../App.css";
import { Link, Redirect } from "react-router-dom";
import { LogInPOST } from "../../Constants";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailid_login: "",
      password_login: "",
      isLoggedIn: false,
    };
    this.onLogIn = this.onLogIn.bind(this);
    this.userLogIn = this.userLogIn.bind(this);
  }

  onLogIn = (event) => {
    event.preventDefault();

    const newUser = {
      emailid_login: this.state.emailid_login,
      password_login: this.state.password_login,
    };

    axios.post(LogInPOST, newUser).then((response) => {
      if (response.status === 200) {
        this.setState({ isLoggedIn: true });
      }
    });
  };

  userLogIn = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { emailid_login, password_login, isLoggedIn } = this.state;
    if (isLoggedIn) {
      return <Redirect to={{ pathname: "/service-registry" }} />;
    }
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={this.onLogIn}>
            <h3>Sign In</h3>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="emailid_login"
                value={emailid_login}
                onChange={this.userLogIn}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password_login"
                value={password_login}
                onChange={this.userLogIn}
              />
            </div>
            <p></p>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={this.onLogIn}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
