import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import classes from "./Contact.module.css";
import Preload from "../components/preloader";

export default function Contact() {
  const [preloader, setPreloader] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    setPreloader((prev) => !prev);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_os3n2jh",
        "template_tgf298c",
        form.current,
        "gIj11iB_0ZqIwM9j1"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "An error occurred",
            text: error.text,
          });
        }
      );
    setPreloader((prev) => !prev);
    form.current.reset();
  };

  return (
    <section id="contact" className={classes.contact}>
      <h1
        className={`${classes.title} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
      >
        CONTACT ME{" "}
      </h1>
      <div
        className={`${classes.card} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
      >
        <form ref={form} onSubmit={sendEmail}>
          <div className={classes.formControl}>
            <label htmlFor="name" className="label">
              Name*
            </label>
            <input id="name" type="text" name="name" required />
          </div>

          <div className={classes.formControl}>
            <label htmlFor="email" type="email">
              Email*
            </label>
            <input id="email" type="email" name="email" required />
          </div>

          <div className={classes.formControl}>
            <label id="message" htmlFor="message">
              Message*
            </label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button className={classes.button} type="submit">
            Send {preloader === true && <Preload />}
          </button>
        </form>
      </div>
    </section>
  );
}
