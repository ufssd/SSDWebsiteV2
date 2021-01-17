import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import AboutUsCarousel from './AboutUsCarousel.js';

const useStyles = makeStyles((theme) => ({
  aboutUsArticle: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    textAlign: 'left'
  },
  aboutUsDescription: {
    maxWidth: '100vw',
    width: 500,
    textAlign: "center",
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 20,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 'calc(100vw - 24px)'
    }
  },
  divider: {
    backgroundColor: '#59b1f9',
    width: 80,
    height: 5,
    marginBottom: 10
  },
  titleContainer: {
    textAlign: 'center',
    marginTop:16
  },
  dividerContainer: {
    marginBottom: 16,
    justifyContent: 'center',
    display: 'grid'
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
      spacing={0}
    >
      <Grid item xs={12} className={classes.titleContainer}>
        <Typography color="textPrimary" component='h2' variant='h2' gutterBottom>What We Do</Typography>
      </Grid>
      <Grid item xs={12} className={classes.dividerContainer}>
        <div className={classes.divider}></div>
      </Grid>
      <Grid item xs={12} sm={6} component='article' className={classes.aboutUsArticle}>
        <Typography color="textPrimary" component='h3' variant='body1' className={classes.aboutUsDescription}>
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
