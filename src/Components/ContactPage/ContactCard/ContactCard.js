import React from "react";
import copy from "clipboard-copy";
import module_styles from "./ContactCard.module.css";

function ContactCard({ title, description, imgSrc, email }) {
  const copyEmail = (e) => {
    // copies the email prop into the user's clipboard
    copy(email);

    // makes sure the ::after pseudo element's text is 'Copied!' while the user still hovers over it
    e.target.classList.add(module_styles["click-hover"]);
  };

  const resetText = (e) => {
    // resets the ::after pseudo element's text to 'Copy to clipboard'
    if (e.target.classList.contains(module_styles["click-hover"]))
      e.target.classList.remove(module_styles["click-hover"]);
  };

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
      <h5
        className={module_styles["contact-card-description"]}
        onClick={copyEmail}
        onMouseLeave={resetText}
      >
        {description}
      </h5>
    </div>
  );
}

export default ContactCard;
