import React from "react";
import AboutUs from "./AboutUs Section/AboutUs";
import HomeBanner from "./HomeBanner Section/HomeBanner";
import OfficersBanner from "./OfficersBanner Section/OfficersBanner";
import module_styles from "./HomePage.module.css";

function HomePage() {
  return (
    <main className={module_styles["Home-page"]}>
      <HomeBanner />
      <AboutUs />
      <OfficersBanner />
    </main>
  );
}

export default HomePage;
