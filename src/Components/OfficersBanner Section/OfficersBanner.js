import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import OfficerCard from "./OfficerCard";
import officersData from "./officers.js";

const useStyles = makeStyles((theme) => ({
  officersBannerContainer: {
    width: "100%",
    marginBottom: 15,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 1000
  },
  cardRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }  
}));

function OfficersBanner() {
  const classes = useStyles();
  //for later: use hooks to update number of rows depending on screen size

  return (
    <section id="officers-section" className={classes.officersBannerContainer}>
      <Typography component='h2' variant='h2'>Officers</Typography>
      <Grid container className={classes.officerCardContainer}>
        {[...Array(officersData.length).keys()].map((card_index) => {
          const officerInfo = officersData[card_index];
          return (
            <OfficerCard
              officerName={officerInfo.name}
              officerPosition={officerInfo.position}
              imgSrc={officerInfo.imgSrc}
              key={`card-${card_index}`}
            />
          );
        })}
      </Grid>
    </section>
  );
}

export default OfficersBanner;
