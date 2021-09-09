import React, { Component } from "react";
import "./Login.css";
import {
  GOOGLE_AUTH_URL,
  FACEBOOK_AUTH_URL,
  GITHUB_AUTH_URL,
  ACCESS_TOKEN,
} from "../../Constants";
import { login } from "../../util/APIUtils";
import { Link, Redirect } from "react-router-dom";
import fbLogo from "../../img/fb-logo.png";
import googleLogo from "../../img/google-logo.png";
import githubLogo from "../../img/github-logo.png";
import Alert from "react-s-alert";
import { Form, Button, Label } from "semantic-ui-react";

class Login extends Component {
  componentDidMount() {
    // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
    // Here we display the error and then remove the error query parameter from the location.
    if (this.props.location.state && this.props.location.state.error) {
      setTimeout(() => {
        Alert.error(this.props.location.state.error, {
          timeout: 5000,
        });
        this.props.history.replace({
          pathname: this.props.location.pathname,
          state: {},
        });
      }, 100);
    }
  }

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
        <div className="login-container">
          <div className="login-content">
            <h1 className="login-title">SignIn to 5gEdge</h1>
            <SocialLogin />
            <br />
            <div className="or-separator">
              <span className="or-text">OR</span>
            </div>
            <LoginForm {...this.props} />
            <br />
            <span className="signup-link">
              New user? <Link to="/signup">Sign up!</Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

class SocialLogin extends Component {
  render() {
    return (
      <div>
        <a className="login-social-margin" href={GOOGLE_AUTH_URL}>
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
      //  <div className="social-login">
      //    <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
      //      <img src={googleLogo} alt="Google" /> Log in with Google
      //    </a>
      //    {/*<a
      //        className="btn btn-block social-btn facebook"
      //        href={FACEBOOK_AUTH_URL}
      //      >
      //        <img src={fbLogo} alt="Facebook" /> Log in with Facebook
      //      </a>*/}
      //    <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
      //      <img src={githubLogo} alt="Github" /> Log in with Github
      //    </a>
      //  </div>
    );
  }
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
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

    const loginRequest = Object.assign({}, this.state);
    console.log("login" + this.state.isLoggedIn);
    login(loginRequest)
      .then((response) => {
        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        this.forceUpdate();
        Alert.success("You're successfully logged in!");
        this.props.history.push("/");
        window.location.reload();
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
          <label className="login-label">Email Id</label>
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
        <Form.Field className="form-item">
          <label className="login-label">Password</label>
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
        <Button type="submit" primary onClick={this.handleSubmit}>
          Login
        </Button>
      </Form>
    );
  }
}

export default Login;
