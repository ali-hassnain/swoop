import React, { useState } from "react";
import "./Search.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import CategoryIcon from "@material-ui/icons/Category";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

// Date picker component

function Search() {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Category
        <CategoryIcon />
      </h2>
      <input classtype="text" list="category" placeholder="options" />
      <datalist className="dataList" id="category">
        <option>Music</option>
        <option>Travel</option>
        <option>Furniture</option>
        <option>Gadgets</option>
        <option>Decor</option>
        <option>Books</option>
        <option>Fashion</option>
        <option>Sports</option>
      </datalist>

      <Button onClick={() => history.push("/search")}>LET'S SWOOP</Button>
    </div>
  );
}

export default Search;
