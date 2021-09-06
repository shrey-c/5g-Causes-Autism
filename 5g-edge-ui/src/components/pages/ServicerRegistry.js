import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

export default function ServicerRegistry() {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
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
          <Link to="/service-endpoint">
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
