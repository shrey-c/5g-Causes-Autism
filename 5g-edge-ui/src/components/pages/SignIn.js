//import React, { Component } from "react";
//import axios from "axios";
//import "../../App.css";
//import { LogInPOST } from "../../Constants";

//export default class SignIn extends Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//      emailid_login: "",
//      password_login: "",
//      errorcreds: "",
//      isLoggedIn: false,
//    };
//    this.onLogIn = this.onLogIn.bind(this);
//    this.userLogIn = this.userLogIn.bind(this);
//  }

//  onLogIn = (event) => {
//    event.preventDefault();

//    const newUser = {
//      emailid_login: this.state.emailid_login,
//      password_login: this.state.password_login,
//    };

//    axios
//      .post(LogInPOST, newUser)
//      .then((response) => {
//        if (response.status === 200) {
//          this.setState({ isLoggedIn: true });
//          axios.defaults.headers.common["Authorization"] =
//            "Basic " +
//            window.btoa(
//              this.state.emailid_login + ":" + this.state.password_login
//            );
//          this.props.history.push("/service-registry");
//        } else if (response.status === 206) {
//          this.props.history.push({
//            pathname: "/register",
//            state:
//              "Verification of this Account is not Completed! Please, Register Again.",
//          });
//        }
//      })
//      .catch((e) => {
//        this.setState({
//          errorcreds: "Wrong credentials",
//        });
//      });
//  };

//  userLogIn = (event) => {
//    this.setState({
//      [event.target.name]: event.target.value,
//    });
//  };

//  render() {
//    const { emailid_login, password_login, isLoggedIn } = this.state;

//    return (
//      <>
//        <a href="http://localhost:3030/oauth2/authorization/google">
//          Continue with Google
//        </a>
//        <br />
//        <a href="http://localhost:3030/oauth2/authorization/github">
//          Continue with Github
//        </a>
//        <div className="auth-wrapper">
//          <div className="auth-inner">
//            <form onSubmit={this.onLogIn}>
//              <h3>Sign In</h3>

//              <div className="form-group">
//                <label>Email address</label>
//                <input
//                  type="email"
//                  className="form-control"
//                  placeholder="Enter email"
//                  name="emailid_login"
//                  value={emailid_login}
//                  onChange={this.userLogIn}
//                />
//              </div>

//              <div className="form-group">
//                <label>Password</label>
//                <input
//                  type="password"
//                  className="form-control"
//                  placeholder="Enter password"
//                  name="password_login"
//                  value={password_login}
//                  onChange={this.userLogIn}
//                />
//              </div>
//              <p></p>
//              <button
//                type="submit"
//                className="btn btn-primary btn-block"
//                onClick={this.onLogIn}
//              >
//                Submit
//              </button>
//            </form>
//          </div>
//        </div>
//      </>
//    );
//  }
//}
