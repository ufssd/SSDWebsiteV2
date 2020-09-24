import React from "react";
import OfficerCard from "./OfficerCard/OfficerCard";
import officersData from "./officers.js";
import module_styles from "./OfficersBanner.module.css";

function OfficersBanner() {
  //for later: use hooks to update number of rows depending on screen size
  const numRows = 2;
  const cardsPerRow = 3;

  return (
    <section className={module_styles["officers-banner-container"]}>
      <h1 className={module_styles["officers-banner-title"]}>Officers</h1>
      {[...Array(numRows).keys()].map((row_index) => (
        <div
          className={module_styles["card-row"]}
          key={`card-row-${row_index}`}
        >
          {[...Array(cardsPerRow).keys()].map((card_index) => {
            const officerInfo =
              officersData[row_index * cardsPerRow + card_index];
            return (
              <OfficerCard
                officerName={officerInfo.name}
                officerPosition={officerInfo.position}
                imgSrc={officerInfo.imgSrc}
                key={`card-${row_index}-${card_index}`}
              />
            );
          })}
        </div>
      ))}
    </section>
  );
}

export default OfficersBanner;
