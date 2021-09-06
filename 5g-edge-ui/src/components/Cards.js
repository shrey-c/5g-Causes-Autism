import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Why 5G Edge Computing?</h1>
      <br />
      <p>
        5G and edge computing are two inextricably linked technologies: they are
        both poised to significantly improve the performance of applications and
        enable huge amounts of data to be processed in real-time. 5G increases
        speeds by up to ten times that of 4G, whereas mobile edge computing
        reduces latency by bringing compute capabilities into the network,
        closer to the end user.
      </p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img1.png"
              text="Seamless extension to computing resources, located right where you need them, to deliver optimal performance."
              label="Designed from ground up"
            />

            <CardItem
              src="images/img2.jpg"
              text="The 5G network core is built to support performance and reliability."
              label="Performance and Reliability"
            />
            <CardItem
              src="images/img3.jpg"
              text="The cloud partners and resources you need to develop your edge compute applications."
              label="Best-in-class resource"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
