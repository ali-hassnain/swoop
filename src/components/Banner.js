import React, { useRef, useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          onClick={() => {
            setShowSearch(!showSearch);
          }}
          variant="outlined"
          className="banner__searchButton"
        >
          {showSearch ? "Hide" : "Select Dates"}
        </Button>
      </div>
      <div className="banner__content">
        <div className="banner__info">
          <h2>You can always get what you want.</h2>
          <h3>Find different kinds of gems hidden near you.</h3>
          <Button onClick={() => history.push("/search")}>
            Explore nearby
          </Button>
        </div>
        <div id="banner-heading">
          <h1>swoop </h1>
          <h1>everything.</h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
