import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SignUpPOST } from "../Constants";

export default function SignUp() {
  function submit() {
    const data = new FormData();
    //data.append("file", this.state.selectedFile);
    let url = SignUpPOST;

    axios
      .post(url, data, {
        // receive two parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        console.log(res);
      });
  }

  //  if (!user) return "No post!";

  return (
    <form>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>First name</label>
        <input type="text" className="form-control" placeholder="First name" />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input type="text" className="form-control" placeholder="Last name" />
      </div>

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

      <button
        type="submit"
        className="btn btn-primary btn-block"
        onClick={submit}
      >
        <Link to="/sign-in">Sign Up</Link>
      </button>
      <p className="forgot-password text-right">
        Already registered <Link to="/sign-in">sign in?</Link>
      </p>
    </form>
  );
}
