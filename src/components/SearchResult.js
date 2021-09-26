import "./SearchResult.css";
import React from "react";
import FavouriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StartIcon from "@material-ui/icons/Star";
import { useHistory } from "react-router";
import { useState } from "react";
function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  const history = useHistory();
  const [click, setClick] = useState(false);

  const colorRed = () => {
    setClick(!click);
  };
  return (
    <div className="searchResult">
      <img
        onClick={() => history.push("/search/book-product")}
        src={img}
        alt={title}
      ></img>
      <FavouriteBorderIcon
        onClick={colorRed}
        className={
          click ? "searchResult__heart" : "searchResult__heart-inactive"
        }
      />
      <div
        onClick={() => history.push("/search/book-product")}
        className="searchResult__info"
      >
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>
        <div className="searchName__infoBottom">
          <div className="searchResult__stars">
            <StartIcon className="searchResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResult__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
