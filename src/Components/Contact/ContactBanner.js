import React from "react";
import Grid from '@material-ui/core/Grid';
import ContactCard from "./ContactCard";
import RangerPic from "../../assets/Ranger.jpg";
import VarunPic from "../../assets/Varun.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contactBanner: {
    width:"100%",
    textAlign: 'center',
    marginBottom: 20
  },
  title: {
    ...theme.typography.h1,
    fontSize: "var(--title-font-size)",
    marginTop: 40,
    marginBottom: 20
  },
  ContactBannerContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    minHeight: "100%",
    textAlign: 'center'
  },
  ContactBannerWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
}));

function ContactBanner() {
  const classes = useStyles();
  return (
    <section className={classes.contactBanner}>
      <h2 className={classes.title}>Contact</h2>
      <div className={classes.ContactBannerContainer}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
          className={classes.ContactBannerWrapper}
        >
          <ContactCard
            description="Email our officer of communications"
            name="Ranger"
            email="ufssd.org@gmail.com"
            imgSrc={RangerPic}
          />
          <ContactCard
            description="Email the president directly"
            name="Varun"
            email="vpuri@ufl.edu"
            imgSrc={VarunPic}
          />
        </Grid>
      </div>
    </section>
  );
}

export default ContactBanner;
