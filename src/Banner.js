import React, { useState } from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
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
      <div className="banner__info">
        <h1>You can always get what you want.</h1>
        <h5>Find different kinds of gems hidden near you.</h5>
        {/* <Link to="/search"> */}
        <Button onClick={() => history.push("/search")}>Explore nearby</Button>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Banner;
