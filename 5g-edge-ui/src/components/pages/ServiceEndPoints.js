import React from "react";
import "../../App.css";

export default function ServiceEndPoints() {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Service End Points</h3>

          <div className="form-group">
            <label>Weather Api End Points</label>
          </div>

          <div className="form-group">
            <label>Song Api End Points</label>
          </div>
        </form>
      </div>
    </div>
  );
}
