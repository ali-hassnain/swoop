import "./BookingPage.css";
import React from "react";
import { useState, useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import Reviews from "../../components/Reviews";
import { Button } from "@material-ui/core";
import useFetch from "../../components/useFetch";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../components/context";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function BookingPage({}) {
  const url = "http://localhost:1337/items-for-sharings/";
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getProductById() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data) {
          const {
            product_images,
            location,
            city,
            Price_perday,
            Week_deposit,
            category,
            Description,
            lenderFname,
            product_rules,
            Title,
          } = data;
          const images = [
            product_images[0],
            product_images[1],
            product_images[2],
            product_images[3],
            product_images[4],
          ];
          const newProduct = {
            location,
            city,
            Price_perday,
            Week_deposit,
            category,
            Description,
            lenderFname,
            product_rules,
            Title,
            images,
          };

          setProduct(newProduct);
        } else {
          setProduct(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getProductById();
  }, [id]);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
    product: id,
  };
  console.log(selectionRange);

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  const handleSubmit = async () => {
    const response = await axios.post(
      "//localhost:1337/borrowing-requests",
      selectionRange
    );
  };
  const [click, setClick] = useState(false);
  const enlarge = () => {
    setClick(!click);
  };
  const multiply = (x, y) => {
    return x * y;
  };
  if (loading) {
    return <Spinner animation="border" variant="primary" className="loader" />;
  }
  if (!product) {
    return <h2>Sorry, try something else</h2>;
  }
  const {
    location,
    city,
    Price_perday,
    Week_deposit,
    category,
    Description,
    lenderFname,
    product_rules,
    Title,
    images,
  } = product;
  return (
    <body>
      <main className="myGallery">
        <div>
          <div
            id={click ? "item-clicked" : "one"}
            className="product_image"
            onClick={enlarge}
          >
            <img src={images[1]} />
          </div>
          <div
            id={click ? "item-clicked" : "two"}
            className="product_image"
            onClick={enlarge}
          >
            <img src={images} />
          </div>
          <div
            id={click ? "item-clicked" : "three"}
            className="product_image"
            onClick={enlarge}
          >
            <img src={images} />
          </div>
          <div
            id={click ? "item-clicked" : "four"}
            className="product_image"
            onClick={enlarge}
          >
            <img src={images} />
          </div>
        </div>
      </main>
      <div className="product-details">
        <div>
          <h3>
            <strong>
              {Title} by {lenderFname} in {location}, {city}.
            </strong>
          </h3>
          <p>
            <strong>
              <span className="colored-prices"> PKR-{Price_perday}/day</span> ·
              Cost for selected days is{" "}
              <span className="colored-prices">
                PKR-
                {multiply(12, Price_perday)}
              </span>
              · Borrowing deposit required is{" "}
              <span className="colored-prices">PKR-{Week_deposit} </span>
            </strong>
          </p>
        </div>
        <div>
          <h4>Product Details - Category:{category}</h4>
          <p>{Description}</p>
        </div>
        <div className="image-container">
          <img src="https://scontent.flhe4-1.fna.fbcdn.net/v/t1.18169-9/12039503_10153682503046346_5601935267868748463_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGDOoH4hBmESTuma594O_tmeGGDYPwPYiV4YYNg_A9iJTAP9KLsuPiXKYGW6Bps-4c&_nc_ohc=GsKciEvuexoAX_sB3rL&_nc_ht=scontent.flhe4-1.fna&oh=e3ba3c2496587b48f6625ed7a81656ec&oe=615F5891" />
        </div>
      </div>
      <hr className="break-line" />
      <div>
        <div>
          <h4 className="seller-rules">Sharing rules by {lenderFname}</h4>
          <p className="seller-rules__info">{product_rules}</p>
        </div>

        <hr className="break-line" />
      </div>
      <div className="borrow-section">
        <h3>Book this, Select dates for {Title}</h3>
        <div className="date-check__box">
          {" "}
          <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        </div>
        <div className="borrow-button">
          <Button onClick={handleSubmit}>Borrow</Button>
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
