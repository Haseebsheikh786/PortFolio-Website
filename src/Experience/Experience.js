import React from "react";
import classes from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={classes.about}>
      <div
        className={`${classes.description} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
      >
        <div>
          <h1
            className={`${classes.title} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
          >
            Work Experience
          </h1>
        </div>
        <div
          className={`${classes.container} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
        >
          <div
            className={`${classes.item} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
          >
            <h2
              className={`${classes.subTitle} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
            >
              DEVIKONS
            </h2>
            <h4
              className={`${classes.experience} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
            >
              Full Stack Developer (current)
            </h4>
            <p
              className={`${classes.animate__fadeInUp} ${classes.animate__animated}`}
            >
              Currently at Devikons, I specialize in both front-end and back-end
              development, primarily using Vue.js and the MERN stack. I work
              closely with backend developers and designers to create engaging
              and responsive user interfaces. I have led projects where I
              developed the front-end with Vue.js or React.js and the backend
              with Node.js, Express.js, and MongoDB. Additionally, I have
              collaborated on projects using Laravel for backend development.
              This hands-on experience has allowed me to refine my skills in
              both Vue.js and MERN development, ensuring seamless user
              experiences while working within multidisciplinary teams.
            </p>
          </div>
          <div
            className={`${classes.item} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
          >
            <h2
              className={`${classes.subTitle} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
            >
              NEXTPAK AGILE SOLUTIONS
            </h2>
            <h4
              className={`${classes.experience} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
            >
              MERN Stack Developer (6 months)
            </h4>
            <p
              className={`${classes.animate__fadeInUp} ${classes.animate__animated}`}
            >
              During my time at nextPak Agile Solutions, I delved deep into the
              realm of MERN stack development, contributing significantly to the
              creation of innovative web solutions. Working alongside a
              dedicated team, I utilized MongoDB, Express.js, React.js, and
              Node.js to design intuitive interfaces, robust APIs, and efficient
              database structures. Rigorous testing and optimization ensured our
              applications performed exceptionally across various platforms.
              This experience molded me into a skilled MERN Stack Developer,
              primed to thrive in the ever-evolving digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
