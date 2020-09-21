import React from "react";
import HomeBanner from "./HomeBanner";
import AboutUs from "./AboutUs";
import module_styles from "./HomePage.module.css";
import OfficersBanner from "./OfficersBanner";

function HomePage() {
  return (
    <div className={module_styles["Home-page"]}>
      <HomeBanner />
      <AboutUs />
      <OfficersBanner />
    </div>
  );
}

export default HomePage;
