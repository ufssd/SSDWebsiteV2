import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import AboutUsCarousel from './AboutUsCarousel.js';

const useStyles = makeStyles((theme) => ({
  aboutUsContainer: {
    display: "flex",
    flexDirection: "column;",
    alignItems: "center",
    width: "100%"
  },
  
  aboutUsTitle: {
    fontSize: "var(--title-font-size)",
    marginTop: 80,
    marginBottom: 20
  },
  
  aboutUsArticle: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  
  aboutUsDescription: {
    width: 500,
    textAlign: "center"
  }
}));

function AboutUs() {
  const classes = useStyles();
  return (
    <section className={classes.aboutUsContainer}>
      <Typography component='h1' variant='h1' className={classes.aboutUsTitle}>What We Do</Typography>
      <article className={classes.aboutUsArticle}>
        <Typography component='h3' variant='body1' className={classes.aboutUsDescription}>
          The Society of Software Developers is focused on helping members learn
          the principles of software design and apply them to real-world
          applications.
          <br />
          <br />
          We are more academic in nature than other organizations and work to
          create a community where students can ask for feedback and assistance
          for the projects.
          <br />
          <br />
          The concepts discussed and used help with building complex software
          systems and better prepare members for team projects, internships, and
          careers in software development.
        </Typography>
        <AboutUsCarousel/>
      </article>
    </section>
  );
}

export default AboutUs;
