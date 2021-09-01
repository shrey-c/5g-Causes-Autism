import React, { Component } from "react";

export default class LogIn extends Component {
  render() {
    return (
      <form>
        <h3>Service End Points</h3>

        <div className="form-group">
          <label>Weather Api End Points</label>
        </div>

        <div className="form-group">
          <label>Song Api End Points</label>
        </div>
      </form>
    );
  }
}
