import "./ListingDates.css";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { useGlobalContext } from "../../components/context";
import { DateRangePicker } from "react-date-range";

function ListingDates() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { userData, setUserData } = useGlobalContext();
  const history = useHistory();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  console.log(selectionRange);

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  const handleSubmit = () => {
    setUserData({ ...userData, ...selectionRange });
  };
  return (
    <main className="step-one-form">
      <div className="step-one-form-heading">
        <h1 id="heading">
          Please select the range of dates you want your product to be shared.
        </h1>
      </div>
      <div className="form-content">
        <div className="step-one-form-header">
          <div className="exit-button">
            <Button onClick={() => history.push("/listing-form/step1")}>
              back
            </Button>
          </div>
        </div>
        <div className="calender">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={new Date()}
          />

          <div className="calender-btn">
            <Button onClick={handleSubmit}>Add Dates</Button>
          </div>
        </div>
        <div className="next-button">
          <Button
            className={!userData.startDate && !userData.endDate && "disabled"}
            onClick={() => history.push("/listing-form/step1/form-submission")}
          >
            Next
          </Button>
        </div>
      </div>
    </main>
  );
}

export default ListingDates;
