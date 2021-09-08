import React, { Component } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
import { CityOptions, ServerOptions } from "../../Constants";

export default class ServicerRegistry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityValue: "",
      regionValue: "",
    };
  }

  handleCityDropdown = (event, data) => {
    this.setState({ cityValue: data.value });
  };

  handleRegionDropdown = (event, data) => {
    this.setState({ regionValue: data.value });
  };

  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h2>Please Confirm your Region</h2>

            <div className="form-group">
              <p>Select the your location: </p>
              <Dropdown
                placeholder="Select City"
                fluid
                search
                selection
                clearable
                options={CityOptions}
                onChange={this.handleCityDropdown}
              />
              <br />
              <p>Select the region: </p>
              <Dropdown
                placeholder="Select Region"
                fluid
                selection
                clearable
                options={ServerOptions}
                onChange={this.handleRegionDropdown}
              />
            </div>
            <br />
            <Link
              to={{
                pathname: "/service-selected",
                state: this.state.regionValue,
              }}
            >
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
