import axios from "axios";
import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalData = userData;
    const response = await axios.post("//localhost:1337/prods", finalData);
    setUserData([]);
  };
  return (
    <AppContext.Provider value={{ userData, setUserData, handleSubmit }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
