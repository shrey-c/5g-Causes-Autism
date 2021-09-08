import React, { Component } from "react";
import "../../App.css";
import Cards from "../Assets/Cards";
import HeroSection from "../Assets/HeroSection";
import Footer from "../Assets/Footer";

class Home extends Component {
  render() {
    return (
      <>
        <HeroSection authenticated={this.props.authenticated} />
        <Cards />
        <Footer />
      </>
    );
  }
}

export default Home;
