import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ButtonBase from "@material-ui/core/ButtonBase";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core";
//local files
import SSDLogo from "../assets/SSDLogo.png";
import Typography from '@material-ui/core/Typography';

//citation: https://material-ui.com/components/app-bar/#hide-app-bar

const useStyles = makeStyles(theme => ({
  navbar: {
    '& .MuiButton-root:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 12,
      paddingRight: 12
    },
    [theme.breakpoints.down('xs')]: {
      borderRadius: 8,
      margin: 8,
      width: "calc(100% - 16px)",
    }
  },
  scrolled: {
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    backgroundColor: "#fff",
    color: "#000"
  },
  //when the navbar is at the top of the screen and is white
  top: {
    background: "rgba(0,0,0,0)",
  },
  HeaderLogo: {
    width: 'calc(var(--header-height) - 20px)',
    height: 'auto',
    margin: '0px 10px',
  },
  HeaderTitle: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.3rem !important',
      fontWeight: '600 !important'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem !important',
      fontWeight: '600 !important'
    }
  },
  buttonBase: {
    width: 'calc(var(--header-height) - 10px)',
    height: 'calc(var(--header-height) - 10px)',
    borderRadius: '50%',
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: "#ffffff"
  },
  toolbar: {
    [theme.breakpoints.down('xs')]: {
      justifyContent: "center"
    }
  }
}));

function ElevationScroll(props) {
  const classes = useStyles();

  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    className: `${classes.navbar} ${trigger ? classes.scrolled : classes.top}`,
    elevation: trigger ? 2 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
};

export default function NavBar(props) {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  }

  const classes = useStyles();
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar id="AppBar" className={classes.navbar}>
          <Toolbar className={classes.toolbar} position='fixed'>
            <ButtonBase onClick={scrollToTop} className={classes.buttonBase}>
              <img
                src={SSDLogo}
                alt=""
                className={classes.HeaderLogo}
              />
            </ButtonBase>
            <Typography component='h3' className={classes.HeaderTitle}>
              Society of Software Developers
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
