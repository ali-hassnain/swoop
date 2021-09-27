import "./App.css";
import Home from "./pages/Home";
import Header from "./components/HeaderTwo";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPages/SearchPage";
import Login from "./pages/Login";

import Help from "./pages/Help";
import SignUpSignIn from "./pages/SignUpSignIn";
import ForgotPassword from "./pages/ForgotPassword";
import BecomeRenter from "./pages/ListingPages/BecomeRenter";
import BecomeRenterTwo from "./pages/ListingPages/BecomeRenterTwo";
// import GoogleApiWrapper from "./pages/Listing pages/BecomeRenterMap";
import ListingForm from "./pages/ListingPages/ListingForm";
// import UploadComponent from "./pages/Listing pages/ListingImages";
import BookingPage from "./pages/BookingPages/BookingPage";

function App() {
  return (
    // Using BEM
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/search/book-product">
            <BookingPage />
          </Route>
          {/* <Route className="ListingImage">
            <UploadComponent />
          </Route> */}
          <Route exact path="/listing-form/step1/form-submission">
            <ListingForm />
          </Route>
          {/* <Route path="/listing">
            <GoogleApiWrapper />
          </Route> */}
          <Route exact path="/listing-form/step1">
            <BecomeRenterTwo />
          </Route>
          <Route exact path="/listing-form">
            <BecomeRenter />
          </Route>
          <Route path="forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/sign-up">
            <SignUpSignIn />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/help">
            <Help />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
