import React from "react";
import module_styles from "./Header.module.css";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Link } from "react-router-dom";
import SSDLogo from "../../assets/SSDLogo.png";

export default function Header() {
  return (
    <nav className={module_styles["Header-nav"]}>
      <div className={module_styles["Header-container"]}>
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
        {/*
        <div className={module_styles["Header-links-container"]}>
          {nav_links.map((elem, index) => (
            <Link
              to={elem.href}
              className={module_styles["Header-link"]}
              key={`${elem.text}-${index}-header-link`}
            >
              {elem.text}
            </Link>
          ))}
        </div>
        */}
      </div>
      <span className={module_styles["Header-box"]} />
    </nav>
  );
}
