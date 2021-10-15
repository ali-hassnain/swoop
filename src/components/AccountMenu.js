import "./AccountMenu.css";
import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

function AccountMenu() {
  const { isLoggedIn } = useGlobalContext();
  console.log(isLoggedIn);
  const logOut = () => {
    localStorage.removeItem("token");
  };
  return (
    <div className="dropdown__menu">
      <ul className="dropdown__menuList">
        {isLoggedIn.loggedIn ? (
          <>
            <li className="dropdown__menuItem">
              <a href="/sign-up"> Profile</a>
            </li>
            <li onClick={logOut} className="dropdown__menuItem">
              <a href="/login">Logout</a>
            </li>
          </>
        ) : (
          <>
            {" "}
            <li className="dropdown__menuItem">
              <a href="/sign-up"> Signup</a>
            </li>
            <li className="dropdown__menuItem">
              <a href="/login">Login</a>
            </li>
          </>
        )}
        <li className="dropdown__menuItem">
          <a href="/listing-form">Experience sharing</a>
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
