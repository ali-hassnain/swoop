import "./Reviews.css";
import React from "react";
import useFetch from "./useFetch";
function Reviews() {
  const { error, data } = useFetch("http://localhost:1337/items-for-sharings/");
  return (
    <div className="reviews">
      <h1>
        {data.map((review) => (
          <div>{review.reviews}</div>
        ))}
      </h1>
    </div>
  );
}

export default Reviews;
