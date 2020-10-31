import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import SpeakerEventPhoto from './../../assets/InfoTechSpeakerEvent.jpg';
import SSDGroupPhoto from './../../assets/SSDGroupPhoto.jpg';

const useStyles = makeStyles((theme) => ({
  carouselContainer: {
    textAlign: 'center',
    maxWidth: "100vw",
    width: 450
  },
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
  item: {
    maxWidth: "100vw",
    width: 450
  },
  photo: {
    width: "inherit"
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
    <div className={useStyles().carouselContainer}>
      <Carousel autoPlay={false}>
        {items.map((item, i) => <Item key={i} item={item} />)}
      </Carousel>
    </div>
  )
}

function Item(props) {
  const classes = useStyles();
  return (
    <div className={classes.item}>
      <img alt="" src={props.item.photo} className={classes.photo} />
      <div className={classes.descriptionContainer}>
        <Typography className={classes.description}>{props.item.description}</Typography>
      </div>
    </div>
  )
}