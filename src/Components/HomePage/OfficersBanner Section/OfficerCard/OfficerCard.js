import React from "react";
import module_styles from "./OfficerCard.module.css";
import Typography from '@material-ui/core/Typography';

function OfficerCard({ officerName, officerPosition, imgSrc }) {
  return (
    <div className={module_styles["officer-card"]}>
      <div className={module_styles["officer-img-container"]}>
        <img src={imgSrc} alt={officerName + " picture"} className={module_styles["officer-img"]} />
      </div>
      <Typography component='h3' variant='h5' className={module_styles["officer-name"]}>{officerName}</Typography>
      <Typography component='h5' variant='overline' className={module_styles["officer-position"]}>{officerPosition}</Typography>
    </div>
  );
}

export default OfficerCard;
