import React from "react";
import Typography from '@material-ui/core/Typography';
import OfficerCard from "./OfficerCard";
import officersData from "./officers.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  officersBannerContainer: {
    width: "100%",
    minHeight: "80vh",
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  
  officersBannerTitle: {
    fontSize: "var(--title-font-size)",
    marginTop: 80,
    marginBottom: 20
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
  const numRows = 2;
  const cardsPerRow = 3;

  return (
    <section className={classes.officersBannerContainer}>
      <Typography component='h1' variant='h1' className={classes.officersBannerTitle}>Officers</Typography>
      {[...Array(numRows).keys()].map((row_index) => (
        <div
          className={classes.cardRow}
          key={`card-row-${row_index}`}
        >
          {[...Array(cardsPerRow).keys()].map((card_index) => {
            const officerInfo = officersData[row_index * cardsPerRow + card_index];
            return (
              <OfficerCard
                officerName={officerInfo.name}
                officerPosition={officerInfo.position}
                imgSrc={officerInfo.imgSrc}
                key={`card-${row_index}-${card_index}`}
              />
            );
          })}
        </div>
      ))}
    </section>
  );
}

export default OfficersBanner;
