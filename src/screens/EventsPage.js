import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
//local files
import EventPost from "../Components/EventPost";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import eventData from "./../sampleData/sampleEvents.js";

//inspiration for UI: https://www.canva.com/learn/
//getting maximum from JSON objects: https://codeburst.io/javascript-finding-minimum-and-maximum-values-in-an-array-of-objects-329c5c7e22a2

import { makeStyles } from "@material-ui/core/styles";

export const pageStyles = makeStyles((theme) => ({
  events: {
    marginTop: 40,
    marginBottom: 40,
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "85vw",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "72.5vw",
    },
  },
  popup: {
    width: "80%",
    height: "80%",
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  spacing: {
    marginTop: 16,
    marginBottom: 28,
  },
}));

export const sectionStyles = makeStyles({
  section: {
    marginTop: 40,
    marginBottom: 8,
  },
  topicName: {
    marginBottom: 8,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  seeAll: {
    color: "#151965",
    marginTop: 32,
    position: "relative",
    fontSize: 18,
    textDecoration: "none",
    "&::after": {
      position: "absolute",
      transition: ".3s",
      content: '""',
      width: 0,
      right: 0,
      left: 0,
      bottom: "-2px",
      borderRadius: 1,
      height: "2px",
      background: "#00c4cc",
    },
    "&:hover::after": {
      width: "100%",
      left: 0,
    },
    "&:active::after": {
      width: "100%",
      left: 0,
    },
  },
});

export default function EventsPage() {
  React.useEffect(() => {
    document.title = "Events | Society of Software Developers";
    window.scrollTo({
      top: 0,
      left: 0,
    });
    setEvents(eventData.eventList);

    return () => {
      document.title = "Society of Software Developers";
    };
  }, []);
  const classes = pageStyles();
  const [events, setEvents] = React.useState([]);

  const isXs = useMediaQuery(useTheme().breakpoints.down("xs"));
  const [footerReference, setFooterReference] = React.useState(null);

  return (
    <React.Fragment>
      <Header />
      <main
        className={classes.events}
        style={{
          marginTop: 100,
          minHeight:
            "calc(100vh - 144px - " +
            (footerReference ? footerReference.scrollHeight : 0) +
            "px",
        }}
      >
        <Typography component="h1" variant={isXs ? "h4" : "h3"}>
          <b>Events</b>
        </Typography>
        <Typography variant={isXs ? "body1" : "h5"} className={classes.spacing}>
          Find information about our GBMs, guest speaker events, and more
        </Typography>
        <Grid container spacing={4}>
          {events.map((eventpost) => (
            <Grid key={eventpost._id} item xs={12} sm={6} xl={4}>
              <EventPost {...eventpost} />
            </Grid>
          ))}
        </Grid>
      </main>
      <div ref={setFooterReference}>
        <Footer home={false} />
      </div>
    </React.Fragment>
  );
}
