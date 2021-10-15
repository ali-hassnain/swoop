import "./BecomeRenterTwo.css";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { useGlobalContext } from "../../components/context";

function BecomRenterTwo() {
  const { userData, setUserData } = useGlobalContext();
  const history = useHistory();
  console.log(userData.category);
  return (
    <main className="step-one-form">
      <div className="step-one-form-heading">
        <h1 id="heading">What kind of Product will you rent?</h1>
      </div>

      <div className="form-content">
        <div className="step-one-form-header">
          <div className="exit-button">
            <Button onClick={() => history.push("/listing-form")}>back</Button>
          </div>
        </div>
        <div className="categories" id="checkboxes">
          <label className="categories-items" for="one">
            <input
              checked={userData.category === "music" ? true : false}
              type="checkbox"
              id="one"
              name="music"
              value="music"
              defaultValue=""
              onChange={(e) =>
                setUserData({ ...userData, category: e.target.value })
              }
            />
            Music
          </label>
          <label className="categories-items" for="two">
            {" "}
            <input
              checked={userData.category === "furniture" ? true : false}
              type="checkbox"
              id="two"
              name="Furniture"
              value="furniture"
              onChange={(e) =>
                setUserData({ ...userData, category: e.target.value })
              }
            />
            Furniture{" "}
          </label>
          <label className="categories-items" for="three">
            <input
              checked={userData.category === "travel" ? true : false}
              type="checkbox"
              id="three"
              name="Travel"
              value="travel"
              onChange={(e) =>
                setUserData({ ...userData, category: e.target.value })
              }
            />
            Travel{" "}
          </label>
          <label className="categories-items" for="four">
            <input
              checked={userData.category === "gadgets" ? true : false}
              type="checkbox"
              id="four"
              name="Gadgets"
              value="gadgets"
              onChange={(e) =>
                setUserData({ ...userData, category: e.target.value })
              }
            />
            Gadgets
          </label>
          <label className="categories-items" for="five">
            {" "}
            <input
              type="checkbox"
              checked={userData.category === "decor" ? true : false}
              id="five"
              name="Decor"
              value="decor"
              onChange={(e) =>
                setUserData({ ...userData, category: e.target.value })
              }
            />
            Decor{" "}
          </label>
          <label className="categories-items" for="six">
            <input
              checked={userData.category === "books" ? true : false}
              type="checkbox"
              id="six"
              name="Books"
              value="books"
              onChange={(e) =>
                setUserData({ ...userData, category: e.target.value })
              }
            />
            Books{" "}
          </label>
          <label className="categories-items" for="seven">
            <input
              type="checkbox"
              checked={userData.category === "fashion" ? true : false}
              id="seven"
              name="Fashion"
              value="fashion"
              onChange={(e) =>
                setUserData({ ...userData, category: e.target.value })
              }
            />
            Fashion
          </label>
          <label className="categories-items" for="eight">
            {" "}
            <input
              type="checkbox"
              id="eight"
              checked={userData.category === "sports" ? true : false}
              name="Sports"
              value="sports"
              onChange={(e) =>
                setUserData({ ...userData, category: e.target.value })
              }
            />
            Sports{" "}
          </label>
        </div>
        <div className="next-button">
          <Button
            className={!userData.category && `disabled`}
            onClick={() => history.push("/listing-form/step1/listing-dates")}
          >
            Next
          </Button>
        </div>
      </div>
    </main>
  );
}

export default BecomRenterTwo;
