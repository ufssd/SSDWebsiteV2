import React from "react";
import ContactBanner from "./ContactBanner Section/ContactBanner";
import module_styles from "./ContactPage.module.css";

function ContactPage() {
  return (
    <main className={module_styles["Contact-Page"]}>
      <ContactBanner />
    </main>
  );
}

export default ContactPage;
