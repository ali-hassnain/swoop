import "./ListingForm.css";
import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { useGlobalContext } from "../../components/context";
import axios from "axios";

function ListingForm() {
  const [image, setImage] = useState([]);
  const { userData, setUserData, handleSubmit } = useGlobalContext();

  const history = useHistory();
  const images = [];
  const handleImageChange = (e) => {
    for (let i = 0; i <= e.target.files.length - 1; i++) {
      const newImage = e.target.files[i];
      images.push(newImage);
    }
    setImage(images);
  };
  useEffect(() => {
    const FinalImageArr = [];
    image.forEach(async (elem) => {
      const data = new FormData();
      data.append("files", elem);
      console.log("image:", image);
      const image_URL = await axios.post("http://localhost:1337/upload", data);
      console.log("imageURL:", image_URL);
      FinalImageArr.push(image_URL.data[0].id);
    });
    setUserData({
      ...userData,
      imagesArray: FinalImageArr,
    });
  }, [image]);

  return (
    <main className="step-one-form">
      <div className="step-one-form-heading">
        <h1 id="heading">Please tell us more about your product.</h1>
      </div>
      <div className="form-content">
        ) : ( "" )}
        <div className="step-one-form-header">
          <div className="exit-button">
            <Button onClick={() => history.push("/listing-form/step1")}>
              back
            </Button>
          </div>
        </div>
        <form className="submission-form" onSubmit={handleSubmit}>
          <div className="listingForm">
            <input
              placeholder="e.g Ali"
              type="text"
              value={userData["name"]}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              name="name"
              id="name"
              autoComplete="off"
            />
            <label for="Name">Name</label>
          </div>
          <div className="listingForm">
            <input
              placeholder="e.g Rocking electric guitar"
              type="text"
              name="title"
              id="title"
              value={userData["title"]}
              onChange={(e) =>
                setUserData({ ...userData, title: e.target.value })
              }
              autoComplete="off"
            />
            <label for="title">Title</label>
          </div>

          <div className="listingForm">
            <textarea
              placeholder="Describe your product"
              name="description"
              id="description"
              value={userData["description"]}
              onChange={(e) =>
                setUserData({ ...userData, description: e.target.value })
              }
              autoComplete="off"
            ></textarea>
            <label for="description">Description</label>
          </div>

          <div class="listingForm">
            <input
              placeholder="PKR"
              type="number"
              name="price"
              value={userData["price"]}
              onChange={(e) =>
                setUserData({ ...userData, price_per_day: e.target.value })
              }
              autoComplete="off"
            ></input>
            <label for="price"> Price per day</label>
          </div>
          <div class="listingForm">
            <input
              placeholder="PKR"
              type="number"
              name="deposit"
              value={userData["deposit"]}
              onChange={(e) =>
                setUserData({ ...userData, deposit: e.target.value })
              }
              autoComplete="off"
            ></input>
            <label for="price"> Deposit for week</label>
          </div>
          <label className="image-label" for="title">
            Upload product images
          </label>
          <div>
            <input
              className="form-control form-control-lg mb-3"
              type="file"
              multiple
              name="imagesArray"
              onChange={handleImageChange}
              // onChange={(e) =>
              //   setUserData({ ...userData, imagesArray: e.target.files[0] })
              // }
              autoComplete="off"
            />
          </div>
          <Button type="submit" className="listing-btn">
            Submit
          </Button>
        </form>
      </div>
    </main>
  );
}

export default ListingForm;
