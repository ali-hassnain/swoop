import "./SearchResult.css";
import React from "react";
import FavouriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StartIcon from "@material-ui/icons/Star";
import { useHistory } from "react-router";
import { useState } from "react";

function SearchResult({
  star,
  imagesArray,
  title,
  location,
  city,
  description,
  price_per_day,
  id,
}) {
  const history = useHistory();
  const [click, setClick] = useState(false);

  const colorRed = () => {
    setClick(!click);
  };
  const multiply = (x, y) => {
    return x * y;
  };
  console.log(`http://localhost:1337${imagesArray[0].url}`);
  return (
    <div>
      <div>
        <div className="searchResult">
          <img
            onClick={() => history.push(`/search/${id}`)}
            src={`http://localhost:1337${imagesArray[0].url}`}
            alt={title}
          ></img>
          <FavouriteBorderIcon
            onClick={colorRed}
            className={
              click ? "searchResult__heart" : "searchResult__heart-inactive"
            }
          />

          <div
            onClick={() => history.push(`/search/${id}`)}
            className="searchResult__info"
          >
            <div className="searchResult__infoTop">
              <p>
                {location}, {city}
              </p>
              <h3>{title}</h3>
              <p>____</p>
              <p>{description}</p>
            </div>
            <div className="searchName__infoBottom">
              <div className="searchResult__stars">
                <StartIcon className="searchResult__star" />
                <p>
                  <strong>{star}4.91</strong>
                </p>
              </div>

              <div className="searchResult__price">
                <h2>PKR {price_per_day}/day</h2>
                <p>Total for selected days {multiply(12, price_per_day)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
