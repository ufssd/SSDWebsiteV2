import React, { Fragment } from "react";
import module_styles from "./Header.module.css";
import nav_links from "./header_links.json";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Link } from "react-router-dom";
import SSDLogo from "../../assets/SSDLogo.png";

function Header() {
  return (
    <Fragment>
      <nav className={module_styles["Header-container"]}>
        <div className={module_styles["Header-logo-container"]}>
          <ButtonBase component={Link} to="/">
            <img
              src={SSDLogo}
              alt=""
              className={module_styles["Header-logo"]}
            />
          </ButtonBase>
          <h3 className={module_styles["Header-title"]}>
            Society of Software Developers
          </h3>
        </div>
        <div className={module_styles["Header-links-container"]}>
          {nav_links.map((elem) => (
            <Link to={elem.href} className={module_styles["Header-link"]}>
              {elem.text}
            </Link>
          ))}
        </div>
      </nav>
      <div className={module_styles["Header-box"]} />
    </Fragment>
  );
}

export default Header;
