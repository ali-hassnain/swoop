import React, { useState } from "react";

var userDetailContext = React.createContext(null);

export default function UserDetailsComponent() {
  var [listingFormData, setListingFormData] = useState({
    listingCategory: null,
    name: null,
    title: null,
    description: null,
    price_per_day: null,
    cleared_step_one: false,
  });

  const handlers = {
    listingCategoryHandle: (event) => {
      setListingFormData({
        listingCategory: event.target,
      });
    },
    listingInputHandler: (event) => {
      [event.name] = event.target.value;
    },
    listingSetStep: () => {
      setListingFormData({
        cleared_step_one: true,
      });
    },
  };

  return (
    <userDetailContext.Provider handlers={handler} value={userDetails}>
      <h1>This is the Parent Component</h1>
      <hr />
      <ChildComponent userDetails={userDetails} />
    </userDetailContext.Provider>
  );
}

function ChildComponent(props) {
  return (
    <div>
      <h2>This is Child Component</h2>
      <hr />
      <SubChildComponent />
    </div>
  );
}

function SubChildComponent(props) {
  var contextData = React.useContext(userDetailContext);
  console.log(contextData);
  return (
    <div>
      <h3>This is Sub Child Component</h3>
      <h4>User Name: {contextData.name}</h4>
      <h4>User Age: {contextData.age}</h4>
    </div>
  );
}
