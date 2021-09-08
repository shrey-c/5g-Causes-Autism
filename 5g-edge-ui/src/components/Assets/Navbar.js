import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import "./Button.css";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              5gEDGE
              <i className="fab fa-typo3" />
            </Link>
            <>
              {this.props.authenticated ? (
                <div className="btn--logout">
                  <NavLink to="/">
                    <Button inverted onClick={this.props.onLogout}>
                      Logout
                    </Button>
                  </NavLink>
                </div>
              ) : (
                <div className="btn--register">
                  <NavLink to="/signup">
                    <Button inverted className="btn--logout-margin">
                      SIGN UP
                    </Button>
                  </NavLink>
                  <NavLink to="/login">
                    <Button inverted className="btn--logout-margin">
                      SIGN IN
                    </Button>
                  </NavLink>
                </div>
              )}
            </>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
