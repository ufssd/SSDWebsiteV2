import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import SpeakerEventPhoto from './../../assets/InfoTechSpeakerEvent.jpg';
import SSDGroupPhoto from './../../assets/SSDGroupPhoto.jpg';
import TablingPhoto from './../../assets/Tabling.png';

const useStyles = makeStyles((theme) => ({
  carouselContainer: {
    textAlign: 'center',
    maxWidth: "100vw",
    width: 450,
    borderRadius: 6
  },
  description: {
    margin: 0,
    color: 'white'
  },
  descriptionContainer: {
    background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.60) 15%, rgba(0,0,0,0.60) 85%, rgba(0,0,0,0) 100%)',
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%"
  },
  item: {
    maxWidth: "100vw",
    width: 450
  },
  aspectRatioBoxOuter: {
    width: "inherit",
    height: 0,
    overflow: "hidden",
    paddingTop: "75%",
    position: "relative"
  },
  aspectRatioBoxInner: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },
  photo: {
    width: "inherit",
    borderRadius: 6
  }
}));

export default function AboutUsCarousel() {
  var items = [
    {
      name: "infotech",
      description: "SSD after a tech talk from BridgeRock Data",
      photo: SSDGroupPhoto
    },
    {
      name: "group pic",
      description: "SSD members at InfoTech speaker series",
      photo: SpeakerEventPhoto
    },
    {
      name: "tabling",
      description: "Cool SSD members tabling 😎",
      photo: TablingPhoto
    }
  ]
  return (
    <div className={useStyles().carouselContainer}>
      <Carousel
        autoPlay={true}
        animation='slide'
        timeout={300}
        interval={5000}
      >
        {items.map((item, i) => <Item key={i} item={item} />)}
      </Carousel>
    </div>
  )
}

function Item(props) {
  const classes = useStyles();
  return (
    <div className={classes.aspectRatioBoxOuter}>
      <div className={classes.aspectRatioBoxInner}>
        <img alt="" src={props.item.photo} className={classes.photo} />
        <div className={classes.descriptionContainer}>
          <Typography className={classes.description}>{props.item.description}</Typography>
        </div>
      </div>
    </div>
  )
}