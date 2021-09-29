import { useEffect, useState } from "react";
import { useGlobalContext } from "./context";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  const { search } = useGlobalContext;

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:1337/items-for-sharings/";
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [search]);

  if (loading) {
    return <Spinner animation="border" variant="primary" className="loader" />;
  }
  return { error, data, loading };
};

export default useFetch;
