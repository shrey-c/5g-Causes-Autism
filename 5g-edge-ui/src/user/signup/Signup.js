import React, { Component } from "react";
import "./Signup.css";
import { Link, Redirect } from "react-router-dom";
import {
  GOOGLE_AUTH_URL,
  FACEBOOK_AUTH_URL,
  GITHUB_AUTH_URL,
} from "../../Constants";
import { signup } from "../../util/APIUtils";
import fbLogo from "../../img/fb-logo.png";
import googleLogo from "../../img/google-logo.png";
import githubLogo from "../../img/github-logo.png";
import Alert from "react-s-alert";
import { Form, Button, Label } from "semantic-ui-react";

class Signup extends Component {
  render() {
    if (this.props.authenticated) {
      return (
        <Redirect
          to={{
            pathname: "/",
            state: { from: this.props.location },
          }}
        />
      );
    }

    return (
      <div className="auth-wrapper">
        <div className="signup-container">
          <div className="signup-content">
            <h1 className="signup-title">SignUp with 5gEdge</h1>
            <SocialSignup />
            <br />
            <div className="or-separator">
              <span className="or-text">OR</span>
            </div>
            <SignupForm {...this.props} />
            <br />
            <span className="login-link">
              Already have an account? <Link to="/login">Login!</Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

class SocialSignup extends Component {
  render() {
    return (
      <div>
        <a className="signup-social-margin" href={GOOGLE_AUTH_URL}>
          <Label as="a">
            <img avatar spaced="right" src={googleLogo} alt="Google" />
            Log in with Google
          </Label>
        </a>
        <a href={GITHUB_AUTH_URL}>
          <Label as="b">
            <img avatar spaced="right" src={githubLogo} alt="Github" />
            Log in with Github
          </Label>
        </a>
      </div>
    );
  }
}

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      isRegistered: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;

    this.setState({
      [inputName]: inputValue,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const signUpRequest = Object.assign({}, this.state);
    console.log(this.state.isRegistered);

    signup(signUpRequest)
      .then((response) => {
        this.setState({ isRegistered: true });
        console.log(this.state.isRegistered);
        Alert.success(
          "You're successfully registered. Please login to continue!"
        );
        this.props.history.push("/login");
      })
      .catch((error) => {
        Alert.error(
          (error && error.message) ||
            "Oops! Something went wrong. Please try again!"
        );
      });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label className="signup-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleInputChange}
            required
          />
        </Form.Field>
        <Form.Field>
          <label className="signup-label">Email Id</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />
        </Form.Field>
        <Form.Field>
          <label className="signup-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
        </Form.Field>
        <div className="form-item">
          <Button type="submit" primary onClick={this.handleSubmit}>
            Sign Up
          </Button>
        </div>
      </Form>
    );
  }
}

export default Signup;
