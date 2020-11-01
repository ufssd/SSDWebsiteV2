import React from "react";
import module_styles from "./Header.module.css";
import ButtonBase from "@material-ui/core/ButtonBase";
import SSDLogo from "../../assets/SSDLogo.png";
import Typography from '@material-ui/core/Typography';

export default function Header() {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  }

  return (
    <nav className={module_styles["Header-nav"]}>
      <div className={module_styles["Header-container"]}>
        <div className={module_styles["Header-logo-container"]}>
          <ButtonBase onClick={scrollToTop}>
            <img
              src={SSDLogo}
              alt=""
              className={module_styles["Header-logo"]}
            />
          </ButtonBase>
          <Typography component='h3' className={module_styles["Header-title"]}>
            Society of Software Developers
          </Typography>
        </div>
      </div>
      <span className={module_styles["Header-box"]} />
    </nav>
  );
}
