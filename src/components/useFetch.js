import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:1337/items-for-sharings/";
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);

  return { error, data };
};

export default useFetch;
