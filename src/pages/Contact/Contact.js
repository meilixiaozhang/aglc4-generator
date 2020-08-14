import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  contact: {
    padding: "40px",
    color: "##473F3F",
  },
  feedback: {
    fontWeight: 500,
    color: "##473F3F",
    fontSize: 32,
    paddingBottom: 10,
  },
  paper: {
    margin: "3% 0",
    paddingBottom: "10%",
    width: "80%",
    paddingLeft: "auto",
    paddingRight: "auto",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    width: "68%",
    margin: "0 3%",
  },
  input1: {
    width: "31%",
    margin: "3%",
  },
  input2: {
    width: "68%",
    margin: "0 3%",
  },
  submit: {
    position: "relative",
    top: "150px",
    backgroundColor: "#ea8a8a",
    color: "#f2f2f2",
  },
}));

function Contact() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleClick() {
    console.log("hh");
  }
  return (
    <div>
      <div className={classes.contact}>
        <Typography variant="h5" className={classes.feedback}>
          Feedback
        </Typography>
        <Typography>Tell us what you think</Typography>
        <Paper className={classes.paper}>
          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            action="mailto:asedugroup@163.com"
            method="POST"
          >
            <TextField className={classes.input1} label="Name" />
            <TextField className={classes.input1} type="email" label="Email" />
            <TextField className={classes.input} label="Subject" />
            <TextField
              className={classes.input2}
              label="Message"
              multiline={true}
              rows={4}
            />
            <Button
              type="submit"
              variant="contained"
              className={classes.submit}
              onClick={handleClick}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
}

export default Contact;
