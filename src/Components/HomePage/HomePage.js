import React from "react";
import HomeBanner from "./HomeBanner";
import AboutUs from "./AboutUs";
import module_styles from "./HomePage.module.css";
import OfficersBanner from "./OfficersBanner";
import Header from "../Header/Header";

function HomePage() {
  return (
    <div className={module_styles["Home-page"]}>
      <Header />
      <div className="page-content">
        <HomeBanner />
        <AboutUs />
        <OfficersBanner />
      </div>
    </div>
  );
}

export default HomePage;
