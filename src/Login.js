import "./Login.css";
import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useState } from "react";

function Login() {
  const history = useHistory();
  return (
    <div className="loginPage">
      <div className="login__header">Welcome to Swoop</div>
      <div className="content">
        <div className="image">
          <img
            src="https://images.pexels.com/photos/1289363/pexels-photo-1289363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Login image"
          ></img>
        </div>
        <div className="login__form">
          <div className="login__formGroup">
            <label htmlFor="email">Email</label>
            <input
              className="login__input"
              type="text"
              name="email"
              placeholder="alihassnain@gmail.com"
            ></input>
          </div>
          <div className="login__formGroup">
            <label htmlFor="password">Password</label>
            <input
              className="login__input"
              type="password"
              id="password"
              name="password"
              minlength="8"
              required
              placeholder="Min 8 characters"
            ></input>
          </div>
          <div>
            <Button
              className="login__button"
              type="submit"
              onClick={() => history.push("/")}
            >
              Login
            </Button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
