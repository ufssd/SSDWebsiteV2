import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContactPage from "./components/ContactPage/ContactPage.js";
import HomePage from "./components/HomePage/HomePage";

//https://reacttraining.com/react-router/web/guides/quick-start

export default function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/events">
          <div>
            events page goes here
            <br />
            <a href="/">Home</a>
            <br />
            <a href="/contact">Contact</a>
          </div>
        </Route>
        <Route exact path="/contact" component={ContactPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}
//citation: https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
