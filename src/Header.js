import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import AccountMenu from "./AccountMenu";
import { useHistory } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  document.onclick = function (e) {
    if (e.target.id !== "profile__avatar") {
      console.log(document.onclick);
    }
  };

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
          <Button onClick={() => history.push("/listing")}>
            Start Swooping
          </Button>
        </div>
        <Avatar
          onClick={() => setOpen(!open)}
          id="profile__avatar"
          className="avatar"
        ></Avatar>
        {open && <AccountMenu />}
      </div>
    </div>
  );
}

export default Header;
