import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import LogIn from "./Pages/LogIn";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LogIn />
        </Route>
      </Switch>
    </Router>
  );
}
