import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  journal: {
    padding: "40px",
  },
  title: {
    color: "##473F3F",
    fontSize: 32,
    fontWeight: 500,
  },
  form: {
    width: "70%",
  },
  formGroup: {
    margin: "10px auto",
  },
  input: {
    margin: "5px 0",
  },
  italic: {
    fontStyle: "italic",
  },
}));

function Journal() {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [volume, setVolume] = useState("");
  const [issue, setIssue] = useState("");
  const [journalName, setJournalName] = useState("");
  const [start, setStart] = useState("");
  const [pinpoint, setPinpoint] = useState("");

  function handleClick() {
    setClicked(true);
  }

  return (
    <div className={classes.journal}>
      <Typography variant="h5" className={classes.title}>
        Journal article
      </Typography>
      <form className={classes.form}>
        <FormControl fullWidth className={classes.formGroup} variant="outlined">
          <Typography variant="subtitle2">
            Author's First Name or Initials
          </Typography>
          <TextField
            id="outlined-adornment-amount"
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            size="small"
            variant="outlined"
            className={classes.input}
            value={firstname}
          />
        </FormControl>
        <FormControl fullWidth className={classes.formGroup} variant="outlined">
          <Typography variant="subtitle2">Surname</Typography>
          <TextField
            id="outlined-adornment-amount"
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            size="small"
            variant="outlined"
            className={classes.input}
            value={lastname}
          />
        </FormControl>
        <FormControl fullWidth className={classes.formGroup} variant="outlined">
          <Typography variant="subtitle2">Title of article</Typography>
          <TextField
            id="outlined-adornment-amount"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            size="small"
            variant="outlined"
            className={classes.input}
            value={title}
          />
        </FormControl>
        <FormControl fullWidth className={classes.formGroup} variant="outlined">
          <Typography variant="subtitle2">Year</Typography>
          <TextField
            id="outlined-adornment-amount"
            onChange={(e) => {
              setYear(e.target.value);
            }}
            size="small"
            variant="outlined"
            className={classes.input}
            value={year}
          />
        </FormControl>
        <FormControl fullWidth className={classes.formGroup} variant="outlined">
          <Typography variant="subtitle2">Volume</Typography>
          <TextField
            id="outlined-adornment-amount"
            onChange={(e) => {
              setVolume(e.target.value);
            }}
            size="small"
            variant="outlined"
            className={classes.input}
            value={volume}
          />
        </FormControl>
        <FormControl fullWidth className={classes.formGroup} variant="outlined">
          <Typography variant="subtitle2">Issue</Typography>
          <TextField
            id="outlined-adornment-amount"
            onChange={(e) => {
              setIssue(e.target.value);
            }}
            size="small"
            variant="outlined"
            className={classes.input}
            value={issue}
          />
        </FormControl>
        <FormControl fullWidth className={classes.formGroup} variant="outlined">
          <Typography variant="subtitle2">Journal Name</Typography>
          <TextField
            id="outlined-adornment-amount"
            onChange={(e) => {
              setJournalName(e.target.value);
            }}
            size="small"
            variant="outlined"
            className={classes.input}
            value={journalName}
          />
        </FormControl>
        <FormControl fullWidth className={classes.formGroup} variant="outlined">
          <Typography variant="subtitle2">Starting Page</Typography>
          <TextField
            id="outlined-adornment-amount"
            onChange={(e) => {
              setStart(e.target.value);
            }}
            size="small"
            variant="outlined"
            className={classes.input}
            value={start}
          />
        </FormControl>
        <FormControl fullWidth className={classes.formGroup} variant="outlined">
          <Typography variant="subtitle2">Pinpoint</Typography>
          <TextField
            id="outlined-adornment-amount"
            onChange={(e) => {
              setPinpoint(e.target.value);
            }}
            size="small"
            variant="outlined"
            className={classes.input}
            value={pinpoint}
          />
        </FormControl>
        <Button
          // type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleClick}
        >
          Submit
        </Button>
      </form>
      {clicked && (
        <div className={classes.result}>
          <Typography>Your citation will be: </Typography>
          <Typography>
            <span>{firstname},</span>
            <span> {lastname},</span>
            <span> '{title}'</span>
            <span> ({year}) </span>
            <span> {volume} </span>
            <span>({issue}) </span>
            <span className={classes.italic}>{journalName}</span>
            <span> {start},</span>
            <span> {pinpoint}.</span>
          </Typography>
          {/* <Button variant="contained" fullWidth>
            Click to copy
          </Button> */}
        </div>
      )}
    </div>
  );
}

export default Journal;
