import React from "react";
import module_styles from "./Header.module.css";

//for testing purposes
import VarunPic from "../../assets/Varun.jpg";

const nav_links = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Events",
    href: "/events",
  },
  {
    text: "Contact",
    href: "/contact",
  },
];

function Header() {
  return (
    <nav className={module_styles["Header-container"]}>
      <div className={module_styles["Header-logo-container"]}>
        <img src={VarunPic} alt="" className={module_styles["Header-logo"]} />
        <h3 className={module_styles["Header-title"]}>
          Society of Software Developers
        </h3>
      </div>
      <div className={module_styles["Header-links-container"]}>
        {nav_links.map((elem) => (
          <a href={elem.href} className={module_styles["Header-link"]}>
            {elem.text}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Header;
