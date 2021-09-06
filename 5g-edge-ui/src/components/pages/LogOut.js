import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="sign-up">
      <h1>Log Out</h1>
      <button type="submit" className="btn btn-primary btn-block">
        <Link to="/">Log Out</Link>
      </button>
    </div>
  );
}
