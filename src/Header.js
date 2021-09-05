import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__icon" src="images/Logo.png" alt="Logo" />
      </Link>
      <div className="header__center">
        <input
          type="text"
          placeholder="Gadgets, Music instruments, Camping equipment..."
        />
        <SearchIcon className="search__icon"></SearchIcon>
      </div>
      <div className="header__right">
        <div className="rent__tag">
          <p>Rent out your products</p>
          <Button> start swooping</Button>
        </div>
        <Avatar className="avatar"></Avatar>
      </div>
    </div>
  );
}

export default Header;
