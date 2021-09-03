import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { LogInPOST } from "../Constants";

export default function ServiceRegistry() {
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
      <h3>Service Registry</h3>

      <div className="form-group">
        {/*<label>Select City</label>*/}
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select City
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>Bengaluru</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Hyderabad</li>
          </ul>
        </div>
      </div>

      <p></p>

      <div className="form-group">
        {/*<label>Select Region</label>*/}
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Region
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>East</li>
            <li>West</li>
            <li>North</li>
            <li>South</li>
          </ul>
        </div>
      </div>
      <p></p>
      <button
        type="submit"
        className="btn btn-primary btn-block"
        onClick={submit}
      >
        <Link to="/service-endpoint">Submit</Link>
      </button>
    </form>
  );
}
