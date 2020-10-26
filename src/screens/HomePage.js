import React, { useEffect } from "react";
import AboutUs from "../Components/HomePage/AboutUs";
import HomeBanner from "../Components/HomePage/HomeBanner Section/HomeBanner";
import OfficersBanner from "../Components/HomePage/OfficersBanner Section/OfficersBanner";
import ContactBanner from "../Components/Contact/ContactBanner";
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
      <ContactBanner/>
    </main>
  );
}

export default HomePage;
