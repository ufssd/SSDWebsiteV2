import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

//https://reacttraining.com/react-router/web/guides/quick-start

export default function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div>Home page goes here</div>
        </Route>
        <Route exact path="/events">
          <div>events page goes here</div>
        </Route>
        <Route exact path="/contact">
          <div>contact page goes here</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
//citation: https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
