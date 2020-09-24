import React from "react";
import social_links from "./footer_links";
import module_styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={module_styles["Footer-container"]}>
      {social_links.map((elem) => (
        <div className={module_styles["Footer-social-container"]}>
          <a href={elem.href}>
            <img
              src={elem.logo}
              alt=""
              className={module_styles["Footer-social-logo"]}
            />
          </a>
          <h3 className={module_styles["Footer-social-description"]}>
            {elem.name}
          </h3>
        </div>
      ))}
    </footer>
  );
}

export default Footer;
