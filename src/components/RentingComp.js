import "./RentingComp.css";
import React from "react";
import { Button } from "@material-ui/core";

function RentingComp() {
  return (
    <div className="rent-banner">
      <div className="rent-banner__img">
        <img
          src="https://images.pexels.com/photos/6585980/pexels-photo-6585980.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Banner"
        ></img>
      </div>
      <div className="rent-banner__info">
        <div className="rent-banner__heading">
          <h2>Try sharing</h2>
        </div>
        <div className="rent-banner__subtitle">
          <span>
            Earn extra income and unlock new opportunities by sharing your
            products
          </span>
        </div>
        <div className="rent-banner__button">
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
}

export default RentingComp;
