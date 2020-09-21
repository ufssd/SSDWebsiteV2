import React from "react";
import ContactCard from "../ContactCard/ContactCard";
import RangerPic from "../../../assets/Ranger.jpg";
import VarunPic from "../../../assets/Varun.jpg";
import module_styles from "./ContactBanner.module.css";

function ContactBanner() {
  return (
    <div className={module_styles["Contact-banner-container"]}>
      <div className={module_styles["Contact-banner-wrapper"]}>
        <ContactCard
          title="ufssd.org@gmail.com"
          description="Ranger - Officer of Communications"
          email="ufssd.org@gmail.com"
          imgSrc={RangerPic}
        />
        <ContactCard
          title="vpuri@ufl.edu"
          description="Varun - President"
          email="vpuri@ufl.edu"
          imgSrc={VarunPic}
        />
      </div>
    </div>
  );
}

export default ContactBanner;
