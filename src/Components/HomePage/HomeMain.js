import React from "react";
import AboutUs from "./AboutUs Section/AboutUs";
import HomeBanner from "./HomeBanner Section/HomeBanner";
import OfficersBanner from "./OfficersBanner Section/OfficersBanner";

function HomeMain() {
  return (
    <main className="page-content">
      <HomeBanner />
      <AboutUs />
      <OfficersBanner />
    </main>
  );
}

export default HomeMain;
