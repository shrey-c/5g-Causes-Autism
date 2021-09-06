import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            5gEDGE
            <i class="fab fa-typo3" />
          </Link>
          <Link to="/">
            <Button buttonStyle="btn--logout">LOG OUT</Button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
