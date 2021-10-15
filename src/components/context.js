import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

function generate_token(length) {
  //edit the token allowed characters
  var a =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
  var b = [];
  for (var i = 0; i < length; i++) {
    var j = (Math.random() * (a.length - 1)).toFixed(0);
    b[i] = a[j];
  }
  return b.join("");
}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState({
    loading: true,
    loggedIn: false,
  });

  const [userData, setUserData] = useState({});

  const [search, setSearch] = useState("a");

  const token = localStorage.getItem("token");

  const checkLoginStatus = async () => {
    if (token) {
      const response = await axios.get("http://localhost:1337/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const user = response.data;
      // console.log(response);
      try {
        setIsLoggedIn({
          ...isLoggedIn,
          loggedIn: true,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          phone: user.phone,
          loading: false,
        });
        setUserData({
          ...userData,
          name: user.firstName + " " + user.lastName,
        });
      } catch (error) {
        setIsLoggedIn({
          ...isLoggedIn,
          loading: false,
        });
        console.log(error);
      }
    } else {
      setIsLoggedIn({
        ...isLoggedIn,
        loading: false,
      });
    }
  };

  // const searchURL = `/search?query=${search.query}&minDate=${search.minDate}&maxDate=${}`
  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalData = {
      ...userData,
      slug: `${convertToSlug(userData.title)}-${generate_token(10)}`,
    };
    console.log("finalData:", finalData);
    const response = await axios.post("http://localhost:1337/prods", finalData);
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,
        handleSubmit,
        search,
        setSearch,
        isLoggedIn,
        setIsLoggedIn,
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
