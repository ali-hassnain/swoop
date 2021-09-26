import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./../components/SearchResult";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 items · 26 August to 30 August · 2 guests</p>
        <h1>Items nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of item</Button>
        <Button variant="outlined">Price</Button>
        {/* <Button variant="outlined">Rooms and Beds</Button> */}
        <Button variant="outlined">More Filters</Button>
      </div>
      <SearchResult
        img="https://images.pexels.com/photos/3975587/pexels-photo-3975587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        location="Lahore Canal Bank Society"
        title="Play this handy instrument to enjoy the vibe"
        description="Acoustic instrument with great sounds having four strings and tuned to 
      provide great music to ears and can be used to record amazing songs"
        star={4.84}
        price="PKR 120 / day"
        total="PKR 360 total"
      />
      <SearchResult
        img="https://images.pexels.com/photos/376452/pexels-photo-376452.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        location="DHA Phase IV"
        title="Rocking electric guitar"
        description="Plug and play, suitable for stage performances and 
        excellent vibe. Autographed by David Gilmour"
        star={4.91}
        price="PKR 1400 / day"
        total="PKR 4200 total"
      />
    </div>
  );
}

export default SearchPage;
