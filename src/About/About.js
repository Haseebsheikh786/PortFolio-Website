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
            I’m a passionate and dynamic Web Developer with 1.5 years of
            experience. My journey includes six months as a MERN Stack Developer
            at NextPak Agile Solutions, and I’m currently honing my skills at
            Devikons, where I work with both Vue.js and Laravel, alongside MERN
            technologies. I specialize in building responsive web applications
            and thrive on the challenge of integrating new technologies to push
            the boundaries of innovation. My hands-on experience equips me with
            a deep understanding of the complexities involved in creating robust
            software solutions. I’m dedicated to continuous learning and always
            stay updated with the latest trends in the ever-evolving world of
            web development. Let’s connect and create cutting-edge solutions
            together!
          </p>
        </div>
      </div>
    </section>
  );
}
