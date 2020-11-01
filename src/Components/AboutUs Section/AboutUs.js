import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import AboutUsCarousel from './AboutUsCarousel.js';

const useStyles = makeStyles((theme) => ({
  aboutUsArticle: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  aboutUsDescription: {
    width: 500,
    textAlign: "center",
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 20
  }
}));

function AboutUs() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      component='section'
    >
      <Grid item xs={12} style={{textAlign: 'center', marginTop:16}}>
        <Typography component='h2' variant='h2'>What We Do</Typography>
      </Grid>
      <Grid item xs={12} sm={6} component='article' className={classes.aboutUsArticle}>
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
      </Grid>
      <Grid item xs={12} sm={6} style={{textAlign: 'center', display: 'contents'}}>
        <AboutUsCarousel/>
      </Grid>
    </Grid>
  );
}

export default AboutUs;
