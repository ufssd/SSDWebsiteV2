import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import SplashImage from './../assets/SplashScreen.jpg';

const useStyles = makeStyles((theme) => ({
  homeBannerContainer: {
    width: "100%",
    minHeight: "calc(100vh - var(--header-height))",
    backgroundImage: "url(" + SplashImage + ")",
  },
  
  homeBanner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: "calc(100vh - var(--header-height))",
    margin: "auto 0px",
    color: "white"
  },
  
  homeBannerText: {
    fontSize: "var(--title-font-size)",
    paddingLeft: "1.5em",
    paddingRight: "1.5em",
    background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.50) 15%, rgba(0,0,0,0.50) 85%, rgba(0,0,0,0) 100%)"
  }
}));

export default function HomeBanner() {
  const classes = useStyles();
  return (
    <section className={classes.homeBannerContainer}>
      <div className={classes.homeBanner}>
        <h1 className={classes.homeBannerText}>
          Software Development and Design
        </h1>
        <h2>Fall 2020 Meetings</h2>
        <Typography style={{fontSize:18, marginTop:0}}>Wednesdays, 6:15pm over Zoom</Typography>
      </div>
    </section>
  );
}
