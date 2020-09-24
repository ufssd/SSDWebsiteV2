import React from "react";
import module_styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <section className={module_styles["about-us-container"]}>
      <h1 className={module_styles["about-us-title"]}>What we do</h1>
      <article className={module_styles["about-us-article"]}>
        <h3 className={module_styles["about-us-description"]}>
          The Society of Software Developers is focused on helping members learn
          the principles of software design and apply them to real-world
          applications.
          <br />
          <br />
          We are more academic in nature than other organizations and work to
          create a community where students can ask for feedback and assistance
          for the projects.
          <br />
          <br />
          The concepts discussed and used help with building complex software
          systems and better prepare members for team projects, internships, and
          careers in software development.
        </h3>
        <div className={module_styles["about-us-image-container"]}>
          <img src="/" alt="" className={module_styles["about-us-image"]} />
        </div>
      </article>
    </section>
  );
}

export default AboutUs;
