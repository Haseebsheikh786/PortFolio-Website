import React from "react";
import Typewriter from "typewriter-effect";
import classes from "./Header.module.css";
import "./animation.css";

export default function Header() {
  return (
    <header id="home" className={classes.header}>
      <div className={classes.intro}>
        <div className={`${classes.description}  fadeInUp  animate__animated`}>
          <p>Hello, I'm</p>
          <h1 className={classes.title}> Haseeb Farrukh</h1>
          <h2>
            {" "}
            <Typewriter
              options={{
                strings: ["FullStack Developer!", "MERN Stack Developer!","MEVN Stack Developer!"],
                autoStart: true,
                loop: true,
              }}
            />{" "}
          </h2>
          <div>
            <a
              href="https://api.whatsapp.com/send?phone=03427282514"
              rel="noreferrer"
              target="_blank"
              className={classes.button}
              id={classes.Hirebutton}
            >
              Hire Me
            </a>
            <a
              alt="mon cv"
              href="/assets/CV.pdf"
              target="_blank"
              className={classes.button}
            >
              My Resume
            </a>
          </div>
        </div>
        <div
          className={`${classes.profil}  fadeInUp  animate__animated `}
        ></div>
      </div>
    </header>
  );
}
