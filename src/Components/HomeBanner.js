import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import SplashImage from './../assets/SplashScreen.jpg';

const useStyles = makeStyles((theme) => ({
  homeBannerContainer: {
    width: "100%",
    minHeight: "calc(100vh - var(--header-height))",
    backgroundImage: "url(" + SplashImage + ")",
    textAlign: 'center',
    backgroundPosition: "15%"
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
  
  homeBannerTextContainer: {
    background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.50) 15%, rgba(0,0,0,0.50) 85%, rgba(0,0,0,0) 100%)",
    maxWidth: "100vw"
  },

  homeBannerText: {
    fontSize: "var(--title-font-size)",
    margin: "0 1.5rem",
    maxWidth: "100vw"
  }
}));

export default function HomeBanner() {
  const classes = useStyles();
  return (
    <section className={classes.homeBannerContainer}>
      <div className={classes.homeBanner}>
        <div className={classes.homeBannerTextContainer}>
          <h1 className={classes.homeBannerText}>
            Software Development and Design
          </h1>
        </div>
        <h2>Fall 2020 Meetings</h2>
        <Typography style={{fontSize:18, marginTop:0}}>Wednesdays, 6:15pm over Zoom</Typography>
      </div>
    </section>
  );
}
