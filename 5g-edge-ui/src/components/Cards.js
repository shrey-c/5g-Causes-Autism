import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Why 5G Edge Service Discovery?</h1>
      <br />
      <p>
        You develop Multi-access Edge Computing (MEC) applications because you
        want the lowest latency and highest throughput between your client
        devices and your Edge services. There's more to it, though, than just
        deploying some of your application services to Edge locations and hoping
        devices connect to the right ones. The Edge location that is
        geographically closest to a client device may not be the optimal
        endpoint for a variety of reasons. The Edge Discovery Service takes into
        account the current location of a device, its IP anchor location,
        current network traffic, and other factors to determine which 5G Edge
        platform a device should connect to.
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
