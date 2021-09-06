import "./App.css";
import Home from "./Home.js";
import Header from "./Header";
import Footer from "./Footer.js";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import Login from "./Login";
import ExperienceRenting from "./ExperienceRenting.js";
import Help from "./Help";
import SignUpSignIn from "./SignUpSignIn";

function App() {
  return (
    // Using BEM
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/sign-up/login">
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
          <Route exact path="/listing">
            <ExperienceRenting />
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
