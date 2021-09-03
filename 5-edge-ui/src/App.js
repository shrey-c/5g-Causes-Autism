import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./Containers/LandingPage";
import LogIn from "./Containers/LogIn";
import SignUp from "./Containers/SignUp";
import ServiceRegistry from "./Containers/ServiceRegistry";
import ServiceEndPoints from "./Containers/ServiceEndPoints";
import LogOut from "./Containers/LogOut";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
              5 Edge Causes Autism
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/log-out"}>
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/sign-in" component={LogIn} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/service-registry" component={ServiceRegistry} />
              <Route path="/service-endpoint" component={ServiceEndPoints} />
              <Route path="/log-out" component={LogOut} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
