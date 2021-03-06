import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import SplashImage from './../assets/SplashScreen.jpg';
import ScrollDownIcon from "./ScrollDownIcon.js";

const useStyles = makeStyles({
  homeBannerContainer: {
    width: "100%",
    minHeight: "100vh",
    backgroundImage: "url(" + SplashImage + ")",
    textAlign: 'center',
    backgroundPositionX: "15%",
    backgroundPositionY: "center"
  },
  homeBanner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: "100vh",
    margin: "auto 0px",
    color: "white"
  },
  homeBannerTextContainer: {
    background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.50) 15%, rgba(0,0,0,0.50) 85%, rgba(0,0,0,0) 100%)",
    maxWidth: "100vw",
    marginBottom: "1rem"
  },
  meetingInfo: {
    fontSize: "1.2rem",
    marginTop: "1.5rem"
  }
});

export default function HomeBanner() {
  const classes = useStyles();
  return (
    <section className={classes.homeBannerContainer}>
      <div className={classes.homeBanner}>
        <div className={classes.homeBannerTextContainer}>
          <Typography variant='h1' component='h1'>
            Software Development and Design
          </Typography>
        </div>
        <div>
          <Typography variant='inherit' component='h2'>Spring 2021 Meetings</Typography>
          <Typography className={classes.meetingInfo}>Tuesdays, 6:15pm over Zoom</Typography>
        </div>
        <ScrollDownIcon />
      </div>
    </section>
  );
}
