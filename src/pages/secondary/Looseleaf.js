import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  looseleaf: {
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

function Looseleaf() {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false);
  const [publisher, setPublisher] = useState("");
  const [title, setTitle] = useState("");
  const [volume, setVolume] = useState("");
  const [update, setUpdate] = useState("");
  const [pinpoint, setPinpoint] = useState("");

  function handleClick() {
    setClicked(true);
  }

  return (
    <div className={classes.looseleaf}>
      <Typography variant="h5" className={classes.title}>
        Looseleaf service
      </Typography>
      <form className={classes.form}>
        <FormControl fullWidth className={classes.formGroup} variant="outlined">
          <Typography variant="subtitle2">Publisher</Typography>
          <TextField
            id="outlined-adornment-amount"
            onChange={(e) => {
              setPublisher(e.target.value);
            }}
            size="small"
            variant="outlined"
            className={classes.input}
            value={publisher}
          />
        </FormControl>
        <FormControl fullWidth className={classes.formGroup} variant="outlined">
          <Typography variant="subtitle2">Title of Encyclopedia</Typography>
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
          <Typography variant="subtitle2">Volume Number</Typography>
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
          <Typography variant="subtitle2">
            At most recent service number for the pinpoint
          </Typography>
          <TextField
            id="outlined-adornment-amount"
            onChange={(e) => {
              setUpdate(e.target.value);
            }}
            size="small"
            variant="outlined"
            className={classes.input}
            value={update}
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
            <span>{publisher},</span>
            <span className={classes.italic}> {title},</span>
            <span> {volume} </span>
            <span>({update})</span>
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

export default Looseleaf;
