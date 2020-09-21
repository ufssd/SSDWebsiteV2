import React from "react";
import module_styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <section className={module_styles["about-us-container"]}>
      <h1 className={module_styles["about-us-title"]}>What we do</h1>
      <article className={module_styles["about-us-article"]}>
        <h3 className={module_styles["about-us-description"]}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
          ducimus molestiae amet repellat eos doloribus ad alias, repellendus
          culpa, aliquid qui? Dignissimos voluptatum ut est temporibus iste!
          Eaque, sed sapiente! Non deserunt iure quidem reprehenderit unde
          fugiat! Repellat neque, odio nemo repudiandae eum laboriosam minima
          nisi placeat corrupti nam eaque magni excepturi mollitia aliquid
          provident delectus quo! Suscipit, praesentium fugit. Quo quibusdam eos
          quam accusamus! Distinctio aperiam ab ea commodi voluptatum culpa.
          Sint omnis animi, magnam tempora beatae quibusdam esse rerum deserunt
          perferendis nam et libero itaque commodi laboriosam sequi?
        </h3>
        <div className={module_styles["about-us-image-container"]}>
          <img src="/" alt="" className={module_styles["about-us-image"]} />
        </div>
      </article>
    </section>
  );
}

export default AboutUs;
