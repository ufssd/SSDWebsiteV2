import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import EventsPage from "./screens/EventsPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

//https://reacttraining.com/react-router/web/guides/quick-start

export default function Root() {
  return (
    <BrowserRouter>
      <Header key={"header"} />
      <Switch key={"page-content"}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/events" component={EventsPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Redirect to="/" />
      </Switch>
      <Footer key={"footer"} />
    </BrowserRouter>
  );
}
//citation: https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
