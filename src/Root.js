import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContactPage from "./Components/ContactPage/ContactPage";
import HomePage from "./Components/HomePage/HomePage";
import EventsPage from "./screens/EventsPage";

//https://reacttraining.com/react-router/web/guides/quick-start

export default function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/events" component={EventsPage}/>
        <Route exact path="/contact" component={ContactPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}
//citation: https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
