import axios from "axios";
import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState("a");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalData = userData;
    const response = await axios.post("//localhost:1337/prods", finalData);
    setUserData("");
  };

  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,
        handleSubmit,
        search,
        setSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
