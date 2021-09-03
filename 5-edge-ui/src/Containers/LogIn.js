import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { LogInPOST } from "../Constants";

export default function LogIn() {
  function submit() {
    const data = new FormData();
    //data.append("file", this.state.selectedFile);
    let url = LogInPOST;

    axios
      .post(url, data, {
        // receive two parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        console.log(res);
      });
  }

  return (
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
      <button
        type="submit"
        className="btn btn-primary btn-block"
        onClick={submit}
      >
        <Link to="/service-registry">Submit</Link>
      </button>
    </form>
  );
}
