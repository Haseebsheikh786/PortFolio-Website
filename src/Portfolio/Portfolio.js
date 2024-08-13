import React from "react";
import classes from "./Portfolio.module.css";
import { Projects } from "../services/ProjectServices";
import { nanoid } from "nanoid";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
export default function Portfolio() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const content = Projects.map((item) => {
    return (
      <div
        key={item.id}
        className={`${classes.card} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
      >
        <img alt={item.title} src={item.img} />
        <h3>{item.title}</h3>
        <p className={classes.description}>{item.descrition}</p>
        <div className={classes.tags}>
          {item.tags.map((tag) => {
            return <span key={nanoid()}>{tag}</span>;
          })}
        </div>
        <hr />
        <div className={classes.action}>
          <a href={item.code} target="_blank">
            Code
          </a>
          {item.demo ? (
            item.demo === "portfolio" ? null : (
              <a href={item.demo} target="_blank">
                Demo
              </a>
            )
          ) : (
            <React.Fragment>
              <a onClick={handleClickOpen}>Demo</a>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Not yet deployed{" "}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} autoFocus>
                    ok{" "}
                  </Button>
                </DialogActions>
              </Dialog>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  });

  return (
    <section id="project">
      <div className={classes.container}>
        <h1 className={classes.title}>SEVERAL PROJECTS</h1>
        <div className={classes.content}>{content}</div>
      </div>
    </section>
  );
}
