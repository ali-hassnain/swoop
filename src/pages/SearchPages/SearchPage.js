import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import useFetch from "../../components/useFetch";

// function filterByValue(array, value) {
//   return array.filter(
//     (data) =>
//       JSON.stringify(data).toLowerCase().indexOf(value.toLowerCase()) !== -1
//   );
// }

function SearchPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const queryParams = new URLSearchParams(window.location.search);
  let query = queryParams.get("query");
  // console.log("query:", query);

  // const myHeaders = new Headers();
  // myHeaders.append("Authorization", "Bearer" + token);

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:1337/prods";
      try {
        const response = await fetch(url);
        const json = await response.json();
        if (query) {
          console.log(json);
          console.log(query);
          query = query.toLowerCase();
          const filteredData = json.filter((elem) => {
            const title = elem.title.toLowerCase();
            const lenderName = elem.name.toLowerCase();
            const Description = elem.description.toLowerCase();
            const category = elem.category.toLowerCase();
            // const city = elem.city.toLowerCase();
            // const location = elem.location.toLowerCase();
            if (
              title.indexOf(query) > -1 ||
              lenderName.indexOf(query) > -1 ||
              Description.indexOf(query) > -1 ||
              category.indexOf(query) > -1
              // ||
              // city.indexOf(query) > -1 ||
              // location.indexOf(query) > -1
            ) {
              console.log(elem);
              return elem;
            }
          });
          setData(filteredData);
        } else {
          setData(json);
          console.log("json:", json);
        }
        setLoading(false);
        console.log(data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [SearchPage]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url = "http://localhost:1337/prods";
  //     try {
  //       const response = await fetch(url);
  //       const json = await response.json();
  //       if (query) {
  //         console.log(json);
  //         console.log(query);
  //         query = query.toLowerCase();
  //         const filteredData = json.filter((elem) => {
  //           const title = elem.Title.toLowerCase();
  //           const lenderName = elem.lenderFname.toLowerCase();
  //           const Description = elem.Description.toLowerCase();
  //           const category = elem.category.toLowerCase();
  //           const city = elem.city.toLowerCase();
  //           const location = elem.location.toLowerCase();
  //           if (
  //             title.indexOf(query) > -1 ||
  //             lenderName.indexOf(query) > -1 ||
  //             Description.indexOf(query) > -1 ||
  //             category.indexOf(query) > -1 ||
  //             city.indexOf(query) > -1 ||
  //             location.indexOf(query) > -1
  //           ) {
  //             console.log(elem);
  //             return elem;
  //           }
  //         });
  //         setData(filteredData);
  //       } else {
  //         setData(json);
  //         console.log("json:", json);
  //       }
  //       setLoading(false);
  //       console.log(data);
  //     } catch (error) {
  //       setError(error);
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, [SearchPage]);

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
