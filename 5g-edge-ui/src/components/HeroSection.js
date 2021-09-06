import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video2.mp4" autoPlay loop muted />
      <h1>5G Edge Discovery Service</h1>
      <p>Tried Developer Portal yet?</p>
      <div className="hero-btns">
        <Link to="/sign-up">
          <Button className="btns" buttonStyle="btn--outline">
            SIGN UP
          </Button>
        </Link>
        <Link to="/sign-in">
          <Button className="btns" buttonStyle="btn--outline">
            SIGN IN
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
