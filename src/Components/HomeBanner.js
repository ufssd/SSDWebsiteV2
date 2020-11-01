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
    maxWidth: "100vw",
    marginBottom: "1rem"
  },

  homeBannerText: {
    fontSize: "var(--title-font-size)",
    margin: "0 1.5rem",
    maxWidth: "100vw",
    fontWeight: "bold",
    letterSpacing: 1,
    lineHeight: 1.3
  },

  meetingInfo: {
    fontSize: "1.2rem",
    marginTop: "1.5rem"
  }
}));

export default function HomeBanner() {
  const classes = useStyles();
  return (
    <section className={classes.homeBannerContainer}>
      <div className={classes.homeBanner}>
        <div className={classes.homeBannerTextContainer}>
          <Typography variant='h1' component='h1' className={classes.homeBannerText}>
            Software Development and Design
          </Typography>
        </div>
        <Typography variant='inherit' component='h2'>Fall 2020 Meetings</Typography>
        <Typography className={classes.meetingInfo}>Wednesdays, 6:15pm over Zoom</Typography>
      </div>
    </section>
  );
}
