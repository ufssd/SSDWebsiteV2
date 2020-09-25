import React, { useEffect } from "react";
import AboutUs from "./AboutUs Section/AboutUs";
import HomeBanner from "./HomeBanner Section/HomeBanner";
import OfficersBanner from "./OfficersBanner Section/OfficersBanner";
import module_styles from "./HomePage.module.css";

function HomePage() {
  useEffect(() => {
    document.title = "Society of Software Developers";
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <main className={module_styles["Home-page"]}>
      <HomeBanner />
      <AboutUs />
      <OfficersBanner />
    </main>
  );
}

export default HomePage;
