import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Sign In</h3>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <p></p>
          <Link to="/service-registry">
            <button
              type="submit"
              className="btn btn-primary btn-block"
              //onClick={submit}
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
