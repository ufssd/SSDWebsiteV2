import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import SpeakerEventPhoto from './../../assets/InfoTechSpeakerEvent.jpg';
import SSDGroupPhoto from './../../assets/SSDGroupPhoto.jpg';

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
      description: "SSD after a tech talk from BridgeRock Datas",
      photo: SSDGroupPhoto
    },
    {
      name: "group pic",
      description: "SSD members at InfoTech speaker series",
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
        <Typography className={classes.description}>{props.item.description}</Typography>
      </div>
    </Paper>
  )
}