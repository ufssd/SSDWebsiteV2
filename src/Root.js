import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//https://reacttraining.com/react-router/web/guides/quick-start

export default function Root() {
  const myTheme = createMuiTheme({
    typography: {
      fontFamily: [
        '"Segoe UI"',
        '-apple-system',
        'BlinkMacSystemFont',
        'Roboto',
        'Oxyegn',
        'Ubuntu',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      h1: {
        fontSize: "2.5rem",
        margin: "0 1.5rem",
        maxWidth: "100vw",
        fontWeight: "bold",
        letterSpacing: 1,
        lineHeight: 1.3
      },
      h2: {
        fontSize: "2.5rem",
        marginBottom: 20,
        marginTop: 0
      }
    }
  });

  console.log(myTheme);

  return (
    <BrowserRouter>
      <ThemeProvider theme={myTheme}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}
