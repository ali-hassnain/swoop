import "./BookingPage.css";
import React from "react";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import Reviews from "../../components/Reviews";
import { Button } from "@material-ui/core";
import useFetch from "../../components/useFetch";

function BookingPage({}) {
  const { error, data } = useFetch("http://localhost:1337/items-for-sharings/");
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
  const [click, setClick] = useState(false);
  const enlarge = () => {
    setClick(!click);
  };
  const multiply = (x, y) => {
    return x * y;
  };
  return (
    <body>
      <main className="myGallery">
        {data.map((images) => (
          <div>
            <div
              id={click ? "item-clicked" : "one"}
              className="product_image"
              onClick={enlarge}
            >
              <img src={images.product_images.formats.medium} />
            </div>
            <div
              id={click ? "item-clicked" : "two"}
              className="product_image"
              onClick={enlarge}
            >
              <img src={images.product_images.formats.medium} />
            </div>
            <div
              id={click ? "item-clicked" : "three"}
              className="product_image"
              onClick={enlarge}
            >
              <img src={images.product_images.formats.medium} />
            </div>
            <div
              id={click ? "item-clicked" : "four"}
              className="product_image"
              onClick={enlarge}
            >
              <img src={images.product_images.formats.medium} />
            </div>
          </div>
        ))}
      </main>
      <div className="product-details">
        {data.map((details) => (
          <div>
            <h3>
              <strong>
                {details.Title} by {details.lenderFname} in {details.location},{" "}
                {details.city}.
              </strong>
            </h3>
            <p>
              <strong>
                <span className="colored-prices">
                  {" "}
                  PKR-{details.Price_perday}/day
                </span>{" "}
                · Cost for selected days is{" "}
                <span className="colored-prices">
                  PKR-
                  {multiply(12, details.Price_perday)}
                </span>
                · Borrowing deposit required is{" "}
                <span className="colored-prices">
                  PKR-{details.Week_deposit}{" "}
                </span>
              </strong>
            </p>
          </div>
        ))}
        <div className="image-container">
          <img src="https://scontent.flhe4-1.fna.fbcdn.net/v/t1.18169-9/12039503_10153682503046346_5601935267868748463_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGDOoH4hBmESTuma594O_tmeGGDYPwPYiV4YYNg_A9iJTAP9KLsuPiXKYGW6Bps-4c&_nc_ohc=GsKciEvuexoAX_sB3rL&_nc_ht=scontent.flhe4-1.fna&oh=e3ba3c2496587b48f6625ed7a81656ec&oe=615F5891" />
        </div>
      </div>
      <hr className="break-line" />
      <div>
        {data.map((lending_rules) => (
          <div>
            <h4 className="seller-rules">
              Sharing rules by {lending_rules.lenderFname}
            </h4>
            <p className="seller-rules__info">{lending_rules.product_rules}</p>
          </div>
        ))}

        <hr className="break-line" />
      </div>
      <div className="borrow-section">
        <h3>Book this, Select dates for {data.title}</h3>
        <div className="date-check__box">
          {" "}
          <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        </div>
        <div className="borrow-button">
          <Button>Borrow</Button>
        </div>
      </div>
      <hr className="break-line" />
      <div className="reviews">
        <Reviews className="review-component" />
      </div>
    </body>
  );
}

export default BookingPage;
