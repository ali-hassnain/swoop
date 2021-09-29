import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import useFetch from "../../components/useFetch";

function SearchPage() {
  const { error, data } = useFetch("http://localhost:1337/items-for-sharings/");
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>{data.length} items · 26 August to 30 August </p>
        <h1>Items nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of item</Button>
        <Button variant="outlined">Price</Button>
        {/* <Button variant="outlined">Rooms and Beds</Button> */}
        <Button variant="outlined">More Filters</Button>
      </div>
      {data.map((item) => (
        <SearchResult key={item.id} {...item} />
      ))}{" "}
    </div>
  );
}

export default SearchPage;
