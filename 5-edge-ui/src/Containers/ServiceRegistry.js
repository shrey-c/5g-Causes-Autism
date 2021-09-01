import React, { Component } from "react";

export default class LogIn extends Component {
  render() {
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
              <li>
                <a class="dropdown-item" href="#">
                  Bengaluru
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Delhi
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Mumbai
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Hyderabad
                </a>
              </li>
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
              <li>
                <a class="dropdown-item" href="#">
                  East
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  West
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  North
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  South
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p></p>
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    );
  }
}
