import React, { useState } from "react";

import classes from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <img alt="logo" src="/assets/logo192.png" />
      </div>
      <ul className={`${classes.menu} ${classes.deskMenu}`}>
        <li className={`${classes.menuItem}`}>
          <a href="#home">Home</a>
        </li>
        <li className={`${classes.menuItem}`}>
          <a href="#about">About</a>
        </li>
        <li className={`${classes.menuItem}`}>
          <a href="#skills">Technologies</a>
        </li>
        <li className={`${classes.menuItem}`}>
          <a href="#experience">Experience</a>
        </li>
        <li className={`${classes.menuItem}`}>
          <a href="#project">Projects</a>
        </li>
        <li className={`${classes.menuItem}`}>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <ul className={`${classes.menu} ${classes.mobileMenu}`}>
        <li className={classes.menuItem}>
          <a href="#home" className={classes.icon}>
            <img alt="home" src="/assets/icons/home.png" />
          </a>
        </li>
        <li className={classes.menuItem}>
          <a href="#about" className={classes.icon}>
            <img alt="about" src="/assets/icons/about.png" />
          </a>
        </li>
        <li className={classes.menuItem}>
          <a href="#skills" className={classes.icon}>
            <img alt="skills" src="/assets/icons/skills.png" />
          </a>
        </li>
        <li className={classes.menuItem}>
          <a href="#experience" className={classes.icon}>
            <img
              alt="experience"
              src="https://tse2.mm.bing.net/th?id=OIP.0IgFYy2eVSHVmUx_l_LxdAHaH_&pid=Api&P=0&h=220"
            />
          </a>
        </li>
        <li className={classes.menuItem}>
          <a href="#project" className={classes.icon}>
            <img alt="project" src="/assets/icons/project.png" />
          </a>
        </li>
        <li className={classes.menuItem}>
          <a href="#contact" className={classes.icon}>
            <img alt="contact" src="/assets/icons/contact.png" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
