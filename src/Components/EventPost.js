import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";

const useStyles = makeStyles({
  eventCard: {
    overflow: 'hidden',
    borderRadius: 4,
    marginBottom: 8,
    background: 'rgb(215,218,225)',
    height: 'calc(100%)',
    '&:hover': {
      '& img': {
        transform: "scale(1.1)"
      },
    },
    '&:active': {
      '& img': {
        transform: "scale(1.1)"
      },
      '& b': {
        color: "#00a8cc"
      },
    },
    '& *': {
      transition: ".5s ease-in-out"
    }
  },
  eventCardInner: {
    padding: 16,
  },
  description: {
    fontSize: 13,
    textDecoration: 'none !important',
    paddingLeft:12,
    paddingRight:12,
    '&:hover': {
      color: "#000000"
    },
    '&:active': {
      color: "#000000"
    },
  },
  title: {
    width: '100%',
    display: 'inline-block',
    color: '#151965',
    textAlign: 'left',
    fontSize: 30,
    textDecoration: 'none !important'
  }
});

EventPost.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default function EventPost(props) {
  const classes = useStyles();
  return (
    <div style={{height:'100%'}}>
      <div className={classes.eventCard}>
        <div className={classes.eventCardInner}>
          <Typography className={classes.title} href={props.articleLink} variant="h5">
            <b>{props.name}</b>
          </Typography>
          <Typography variant='subtitle1'>
            {props.date}
          </Typography>
          <Typography 
            className={classes.description}
            variant="subtitle-2"
            display="block"
            style={{textDecoration:'none'}}
            color='textSecondary'
          >
            {props.description}
          </Typography>
        </div>
      </div>
    </div>
  );
}