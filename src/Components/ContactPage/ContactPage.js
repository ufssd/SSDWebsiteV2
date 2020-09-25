import React, { useEffect } from "react";
import ContactBanner from "./ContactBanner Section/ContactBanner";
import module_styles from "./ContactPage.module.css";

function ContactPage() {
  useEffect(() => {
    document.title = "Contact | Society of Software Developers";
    window.scrollTo({
      top: 0,
      left: 0,
    });

    return () => {
      document.title = "Society of Software Developers";
    };
  }, []);

  return (
    <main className={module_styles["Contact-Page"]}>
      <ContactBanner />
    </main>
  );
}

export default ContactPage;
