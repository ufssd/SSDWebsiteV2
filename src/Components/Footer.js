import React from "react";
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
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
    paddingTop:16,
    paddingBottom:16
  },
  FooterSocialContainer: {
    margin: "0px 30px",
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
    fontSize: "1.3rem",
    color: "white"
  }
});

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.FooterContainer}>
      {social_links.map((elem, index) => (
        <ButtonBase
          className={classes.FooterSocialContainer}
          key={`${elem.name}-${index}-footer-container`}
          href={elem.href}
          target="_blank"
          rel="noopener noreferrer"
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
    </footer>
  );
}

export default Footer;
