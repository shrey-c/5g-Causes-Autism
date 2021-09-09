//import React from "react";
//import "./App.css";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Navbar from "./components/Navbar";
//import Home from "./components/pages/Home";
//import ServiceEndPoints from "./components/pages/ServiceEndPoints";
//import ServicerRegistry from "./components/pages/ServicerRegistry";
//import ServiceSelected from "./components/pages/ServerSelected";
//import SignUp from "./components/pages/SignUp";
//import SignIn from "./components/pages/SignIn";
//import LogOut from "./components/pages/LogOut";

//function App() {
//  return (
//    <>
//      <Router>
//        <Navbar />
//        <Switch>
//          <Route path="/" exact component={Home} />
//          <Route path="/service-endpoint" component={ServiceEndPoints} />
//          <Route path="/service-registry" component={ServicerRegistry} />
//          <Route path="/service-selected" component={ServiceSelected} />
//          <Route path="/sign-up" component={SignUp} />
//          <Route path="/sign-in" component={SignIn} />
//          <Route path="/log-out" component={LogOut} />
//        </Switch>
//      </Router>
//    </>
//  );
//}

//export default App;

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Navbar from "./components/Assets/Navbar";
import Home from "./components/pages/Home";
import Login from "./user/login/Login";
import Signup from "./user/signup/Signup";
import Profile from "./user/profile/Profile";
import Song from "./components/pages/ServiceEndPoints/Song";
import Weather from "./components/pages/ServiceEndPoints/Weather";
import Service from "./components/pages/ServiceEndPoints/Service";
import ServicerRegistry from "./components/pages/ServicerRegistry";
import ServiceSelected from "./components/pages/ServerSelected";
import OAuth2RedirectHandler from "./user/oauth2/OAuth2RedirectHandler";
import NotFound from "./components/Assets/NotFound";
import LoadingIndicator from "./components/Assets/LoadingIndicator";
import { getCurrentUser } from "./util/APIUtils";
import { ACCESS_TOKEN } from "./Constants";
import PrivateRoute from "./components/Assets/PrivateRoute";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false,
    };

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    this.setState({
      loading: true,
    });

    getCurrentUser()
      .then((response) => {
        this.setState({
          currentUser: response,
          authenticated: true,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
        });
      });
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null,
    });
    Alert.success("You're safely logged out!");
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    if (this.state.loading) {
      return <LoadingIndicator />;
    }

    return (
      <Router>
        <Navbar
          authenticated={this.state.authenticated}
          onLogout={this.handleLogout}
        />
        {/*<div className="app-body">*/}
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home {...props} authenticated={this.state.authenticated} />
            )}
          ></Route>
          <Route path="/service-endpoint-weather" component={Weather} />
          <Route path="/service-endpoint-song" component={Song} />
          <Route path="/service-endpoint-service" component={Service} />
          <Route path="/service-registry" component={ServicerRegistry} />
          <Route path="/service-selected" component={ServiceSelected} />
          <PrivateRoute
            path="/profile"
            authenticated={this.state.authenticated}
            currentUser={this.state.currentUser}
            component={Profile}
          ></PrivateRoute>
          <Route
            path="/login"
            render={(props) => (
              <Login authenticated={this.state.authenticated} {...props} />
            )}
          ></Route>
          <Route
            path="/signup"
            render={(props) => (
              <Signup authenticated={this.state.authenticated} {...props} />
            )}
          ></Route>
          <Route
            path="/oauth2/redirect"
            component={OAuth2RedirectHandler}
          ></Route>
          <Route component={NotFound}></Route>
        </Switch>
        {/*</div>*/}
        {/*<Alert
          stack={{ limit: 3 }}
          timeout={3000}
          position="top-right"
          effect="slide"
          offset={65}
        />*/}
      </Router>
    );
  }
}

export default App;
