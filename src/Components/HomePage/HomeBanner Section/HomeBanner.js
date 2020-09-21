import React from "react";
import module_styles from "./HomeBanner.module.css";

function HomeBanner() {
  return (
    <section className={module_styles["home-banner-container"]}>
      <div className={module_styles["home-banner"]}>
        <h1 className={module_styles["home-banner-text"]}>
          Society of Software Developers
        </h1>
      </div>
    </section>
  );
}

export default HomeBanner;
