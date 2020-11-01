import React from "react";
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import Discord from "../assets/Discord.svg";
import Facebook from "../assets/Facebook.svg";
import Github from "../assets/Github.svg";
import Zoom from "../assets/Zoom.svg";

const social_links = [
  {
    name: "Discord",
    logo: Discord,
    href: "https://www.discord.gg/5SyB3yx",
  },
  {
    name: "Facebook",
    logo: Facebook,
    href: "https://www.facebook.com/groups/ufssd",
  },
  {
    name: "GitHub",
    logo: Github,
    href: "https://www.github.com/ufssd",
  },
  {
    name: "Zoom Room",
    logo: Zoom,
    href: "https://ufl.zoom.us/j/99441879822",
  },
];

const useStyles = makeStyles({
  FooterContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#035496",
    position: 'relative'
  },
  FooterSocialContainer: {
    padding: "8px 30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  FooterSocialLogo: {
    height: 50,
    width: "auto"
  },
  FooterSocialDescription: {
    margin: 0,
    color: "white",
    width: "max-content"
  },
  snake: {
    position: "absolute",
    bottom: 8,
    right: 8
  }
});

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.FooterContainer}>
      <Grid container style={{maxWidth:450}}>
        {social_links.map((elem, index) => (
          <ButtonBase
            className={classes.FooterSocialContainer}
            key={`${elem.name}-${index}-footer-container`}
            href={elem.href}
            target="_blank"
            rel="noopener noreferrer"
            component={Grid}
            item
            xs={6}
            sm={3}
          >
            <img
              src={elem.logo}
              alt={elem.name + "logo"}
              className={classes.FooterSocialLogo}
            />
            <Typography component ='h3' className={classes.FooterSocialDescription}>
              {elem.name}
            </Typography>
          </ButtonBase>
        ))}
      </Grid>
      <span aria-label="snake-emoji" component="span" role="img" className={classes.snake}>
        🐍
      </span>
    </footer>
  );
}

export default Footer;
