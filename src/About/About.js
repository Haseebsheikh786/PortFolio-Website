import React from "react";
import classes from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={classes.about}>
      <div
        className={`${classes.img} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
      ></div>
      <div
        className={`${classes.description} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
      >
        <div>
          <h1
            className={`${classes.title} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
          >
            About Me{" "}
          </h1>
        </div>
        <div>
          <p
            className={`${classes.animate__fadeInUp} ${classes.animate__animated}`}
          >
            Dynamic and dedicated Web Developer with one plus year of industry
            experience, including six months as a MERN Stack Developer at
            NextPak Agile Solutions. Currently, I am expanding my expertise at
            Devikons, working with both Vue.js and Laravel alongside MERN
            technologies. I excel in creating responsive web applications and am
            driven by a passion for integrating new technologies to drive
            innovation. My comprehensive hands-on experience enables me to
            understand the intricate details of building robust software
            solutions. I am committed to continuous learning and stay updated
            with the latest trends in the ever-evolving field of web
            development. Let's collaborate to create state-of-the-art solutions
            together!
          </p>
        </div>
      </div>
    </section>
  );
}
