import React from "react";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.social}>
        <a
          href="https://www.linkedin.com/in/haseeb-sheikh-2a04b3270"
          target="_blank"
        >
          <img alt="linkedin-icon" src="/assets/icons/smal-linkedin-logo.png" />
        </a>
        <a href="http://github.com/Haseebsheikh786" target="_blank">
          <img alt="github-icon" src="/assets/icons/smal-github.png" />
        </a>
        <a href="mailto:haseeb99sh@gmail.com" target="_blank">
          <img alt="mail-icon" src="/assets/icons/smal-mail.png" />
        </a>
      </div>
      <p>
        Designed and coded with love © 2023, <span>Haseeb Farrukh </span>{" "}
      </p>
    </footer>
  );
}
