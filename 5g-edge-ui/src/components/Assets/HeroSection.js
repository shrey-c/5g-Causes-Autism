import React, { Component } from "react";
import "../../App.css";
import { Button } from "./Button";
import { Icon } from "semantic-ui-react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

class HeroSection extends Component {
  render() {
    return (
      <div className="hero-container">
        <video src="/videos/video2.mp4" autoPlay loop muted />
        <h1>5G Edge Discovery Service</h1>
        {this.props.authenticated ? (
          <>
            <p>Tried Developer Portal yet?</p>
            <div>
              <Link to="/service-registry">
                <Button className="btns" buttonStyle="btn--outline">
                  Explore
                  <Icon size="large" name="arrow alternate circle right" />
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <p>Please SignUp/SignIn to access Developer Portal</p>
        )}
        ;
      </div>
    );
  }
}

export default HeroSection;
