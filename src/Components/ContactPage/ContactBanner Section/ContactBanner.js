import React from "react";
import ContactCard from "../ContactCard/ContactCard";
import RangerPic from "../../../assets/Ranger.jpg";
import VarunPic from "../../../assets/Varun.png";
import module_styles from "./ContactBanner.module.css";

function ContactBanner() {
  return (
    <div className={module_styles["Contact-banner-container"]}>
      <div className={module_styles["Contact-banner-wrapper"]}>
        <ContactCard
          title="Ranger - Officer of Communications"
          description="ufssd.org@gmail.com"
          email="ufssd.org@gmail.com"
          imgSrc={RangerPic}
        />
        <ContactCard
          title="Varun - President"
          description="vpuri@ufl.edu"
          email="vpuri@ufl.edu"
          imgSrc={VarunPic}
        />
      </div>
    </div>
  );
}

export default ContactBanner;
