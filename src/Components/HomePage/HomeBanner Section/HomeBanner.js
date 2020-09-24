import React from "react";
import module_styles from "./HomeBanner.module.css";

function HomeBanner() {
  return (
    <section className={module_styles["home-banner-container"]}>
      <div className={module_styles["home-banner"]}>
        <h1 className={module_styles["home-banner-text"]}>
          Software Development and Design
        </h1>
        <h2>Fall 2020 Meetings</h2>
        <p style={{fontSize:18, marginTop:0}}>Wednesdays, 6:15pm over Zoom</p>
      </div>
    </section>
  );
}

export default HomeBanner;
