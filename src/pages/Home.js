import React, { useState } from "react";
import Banner from "./../components/Banner";
import "./Home.css";
import Card from "./../components/Card";
import RentingComp from "../components/RentingComp";
import FileUpload from "../components/fileUpload";
import { useGlobalContext } from "../components/context";

function Home() {
  const { search, setSearch } = useGlobalContext();
  return (
    <div className="home">
      <Banner />
      <div className="categories__header">
        <h2>Categories</h2>
      </div>
      <div className="home__section">
        <div
          onClick={() => {
            window.location.href = `/search?query=music`;
          }}
        >
          <Card
            src="https://images.pexels.com/photos/6966/abstract-music-rock-bw.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            title="Music"
            description="Swoop the music"
          />
        </div>
        <div
          onClick={() => {
            window.location.href = `/search?query=furniture`;
          }}
        >
          <Card
            src="https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            title="Furniture"
            description="Swoop your couch"
          />
        </div>
        <div
          onClick={() => {
            window.location.href = `/search?query=travel`;
          }}
        >
          <Card
            src="https://images.pexels.com/photos/1058959/pexels-photo-1058959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            title="Travel"
            description="Swoop and travel"
          />
        </div>
        <div
          onClick={() => {
            window.location.href = `/search?query=gadgets`;
          }}
        >
          <Card
            src="https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            title="Gadgets"
            description="Swoop your entertainment"
          />
        </div>
      </div>
      <div className="home__section">
        <div
          onClick={() => {
            window.location.href = `/search?query=decor`;
          }}
        >
          <Card
            src="https://images.pexels.com/photos/6707631/pexels-photo-6707631.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            title="Decor"
            description="Swoop the decor"
          />
        </div>
        <div
          onClick={() => {
            window.location.href = `/search?query=books`;
          }}
        >
          <Card
            src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            title="Books"
            description="Swoop your library"
          />
        </div>
        <div
          onClick={() => {
            window.location.href = `/search?query=fashion`;
          }}
        >
          <Card
            src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            title="Fashion"
            description="Swoop your wardrobe"
          />
        </div>
        <div
          onClick={() => {
            window.location.href = `/search?query=sports`;
          }}
        >
          <Card
            src="https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            title="Sports"
            description="Swoop and play"
          />
        </div>
      </div>
      <div>{/* <RentingComp /> */}</div>
    </div>
  );
}

export default Home;
