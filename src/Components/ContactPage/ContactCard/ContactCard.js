import React from "react";
import module_styles from "./ContactCard.module.css";

function ContactCard({ title, description, imgSrc, email }) {
  return (
    <div className={module_styles["contact-card"]}>
      <a
        className={module_styles["contact-img-container"]}
        href={`mailto:${email}`}
      >
        <img src={imgSrc} alt="" className={module_styles["contact-img"]} />
        <div className={module_styles["contact-img-overlay"]}>
          <h1 className={module_styles["contact-img-overlay-text"]}>Email</h1>
        </div>
      </a>
      <h3 className={module_styles["contact-card-title"]}>{title}</h3>
      <h5 className={module_styles["contact-card-description"]}>
        {description}
      </h5>
    </div>
  );
}

export default ContactCard;
