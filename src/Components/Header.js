import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import SSDLogo from "../assets/SSDLogo.png";

const useStyles = makeStyles((theme) => ({
  HeaderNav: {
    width: '100%',
    height: 'var(--header-height)',
    maxWidth: '100vw'
  },
  HeaderContainer: {
    position: 'fixed',
    zIndex: 999,
    top: 0,
    width: '100%',
    height: 'var(--header-height)',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    boxShadow: '0px 5px 30px 0px rgba(0, 0, 0, 0.2)'
  },
  
  HeaderBox: {
    width: '100%',
    height: '100%'
  },
  HeaderLogoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left'
  },
  HeaderLogo: {
    width: 'calc(var(--header-height) - 20px)',
    height: 'auto',
    margin: '0px 10px',
  },
  HeaderTitle: {
    fontSize: '1.3rem !important',
    fontWeight: '600 !important'
  },
  HeaderLinksContainer: {
    margin: '0px 10px 0px auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  HeaderLink: {
    margin: '0px 20px',
    textDecoration: 'none',
    fontSize: '1.5rem',
    color: 'rgb(59, 59, 59)'
  },
  buttonBase: {
    width: 'calc(var(--header-height) - 10px)',
    height: 'calc(var(--header-height) - 10px)',
    borderRadius: '50%',
    marginLeft: 12,
    marginRight: 12
  }
}));

export default function Header() {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  }

  const classes = useStyles();
  return (
    <nav className={classes.HeaderNav}>
      <div className={classes.HeaderContainer}>
        <div className={classes.HeaderLogoContainer}>
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
        </div>
      </div>
      <span className={classes.HeaderBox} />
    </nav>
  );
}
