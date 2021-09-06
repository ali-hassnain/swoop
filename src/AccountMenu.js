import "./AccountMenu.css";
import React from "react";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";

function AccountMenu() {
  return (
    <div className="dropdown__menu">
      <ul className="dropdown__menuList">
        <li className="dropdown__menuItem">
          <a href="/sign-up"> Signup</a>
        </li>
        <li className="dropdown__menuItem">
          <a href="/login">Login</a>
        </li>
        <li className="dropdown__menuItem">
          <a href="/listing">Experience renting</a>
        </li>
        <li className="dropdown__menuItem">
          <a href="/search">Experience borrowing</a>
        </li>
        <li className="dropdown__menuItem">
          <a href="/help">Help</a>
        </li>
      </ul>
    </div>
  );
}

export default AccountMenu;
