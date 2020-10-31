import React, { useEffect } from "react";
import AboutUs from "../Components/AboutUs Section/AboutUs.js";
import HomeBanner from "../Components/HomeBanner.js";
import OfficersBanner from "../Components/OfficersBanner Section/OfficersBanner.js";
import ContactBanner from "../Components/Contact/ContactBanner.js";
import module_styles from "./HomePage.module.css";

export default function HomePage() {
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
