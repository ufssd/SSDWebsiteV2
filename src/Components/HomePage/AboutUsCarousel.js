import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import SpeakerEventPhoto from './../../assets/InfoTechSpeakerEvent.jpg';
import SSDGroupPhoto from './../../assets/SSDGroupPhoto.jpg';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  description: {
    margin: 0,
    color: 'white'
  },
  descriptionContainer: {
    background: '#2a2a2a',
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: 8,
  },
  photo: {
    maxWidth: 450
  }
}));

export default function AboutUsCarousel() {
  var items = [
    {
      name: "infotech",
      description: "SSD members at InfoTech speaker series",
      photo: SSDGroupPhoto
    },
    {
      name: "group pic",
      description: "SSD at a talk from ___",
      photo: SpeakerEventPhoto
    }
  ]
  return (
    <Carousel autoPlay={false}>
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  )
}

function Item(props) {
  const classes = useStyles();
  return (
    <Paper>
      <img alt="" src={props.item.photo} className={classes.photo} />
      <div className={classes.descriptionContainer}>
        <p className={classes.description}>{props.item.description}</p>
      </div>
    </Paper>
  )
}