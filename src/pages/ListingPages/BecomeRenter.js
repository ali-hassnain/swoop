import "./BecomeRenter.css";
import React, { useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useGlobalContext } from "../../components/context";
import SignIn from "../Login and registration pages/Login";

function BecomeRenter() {
  const { isLoggedIn } = useGlobalContext();
  const history = useHistory();
  return (
    <>
      {!isLoggedIn.loading && (
        <>
          {isLoggedIn.loggedIn ? (
            <>
              <div className="form-start ">
                <div className="img-container">
                  <img
                    src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="image"
                    className="img"
                  ></img>
                </div>
                <div className="button-and-text">
                  <Button onClick={() => history.push("/")}>Home</Button>
                  <div className="form-text">
                    <h1> Rent your products in few easy steps</h1>
                    <h2>Join us. We will help you every step of the way.</h2>
                  </div>
                  <Button onClick={() => history.push("/listing-form/step1")}>
                    Next
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <Redirect to={{ pathname: `/sign-up` }} />
          )}
        </>
      )}
    </>
  );
}

export default BecomeRenter;
