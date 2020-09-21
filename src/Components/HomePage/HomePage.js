import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomeMain from "./HomeMain";
import module_styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={module_styles["Home-page"]}>
      <Header />
      <HomeMain />
      <Footer />
    </div>
  );
}

export default HomePage;
