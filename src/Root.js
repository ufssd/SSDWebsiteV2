import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";

//https://reacttraining.com/react-router/web/guides/quick-start

export default function Root() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
//citation: https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
