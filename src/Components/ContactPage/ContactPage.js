import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactMain from "./ContactMain";
import module_styles from "./ContactPage.module.css";

function ContactPage() {
  return (
    <div className={module_styles["Contact-Page"]}>
      <Header />
      <ContactMain />
      <Footer />
    </div>
  );
}

export default ContactPage;
