import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import ServiceEndPoints from "./components/pages/ServiceEndPoints";
import ServicerRegistry from "./components/pages/ServicerRegistry";
import ServiceSelected from "./components/pages/ServerSelected";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import LogOut from "./components/pages/LogOut";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/service-endpoint" component={ServiceEndPoints} />
          <Route path="/service-registry" component={ServicerRegistry} />
          <Route path="/service-selected" component={ServiceSelected} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/log-out" component={LogOut} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
