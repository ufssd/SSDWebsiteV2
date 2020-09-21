import React from "react";
import module_styles from "./OfficerCard.module.css";

function OfficerCard({ officerName, officerPosition, imgSrc }) {
  return (
    <div className={module_styles["officer-card"]}>
      <div className={module_styles["officer-img-container"]}>
        <img src={imgSrc} alt="" className={module_styles["officer-img"]} />
      </div>
      <h3 className={module_styles["officer-name"]}>{officerName}</h3>
      <h5 className={module_styles["officer-position"]}>{officerPosition}</h5>
    </div>
  );
}

export default OfficerCard;
