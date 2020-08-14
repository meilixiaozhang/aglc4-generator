import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  reported: {
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

function Reported() {
  const classes = useStyles();
  const [caseName, setCaseName] = useState("");
  const [year, setYear] = useState("");
  const [volume, setVolume] = useState("");
  const [abbreviation, setAbb] = useState("");
  const [start, setStart] = useState("");
  const [pinpoint, setPinpoint] = useState("");
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
  }

  return (
    <div className={classes.reported}>
      <Typography variant="h5" className={classes.title}>
        cases - Reported judgement
      </Typography>
      <form className={classes.form}>
        <FormControl fullWidth className={classes.formGroup} variant="outlined">
          <Typography variant="subtitle2">Case Name</Typography>
          <TextField
            id="outlined-adornment-amount"
            onChange={(e) => {
              setCaseName(e.target.value);
            }}
            size="small"
            variant="outlined"
            className={classes.input}
            value={caseName}
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
          <Typography variant="subtitle2">
            Report Series Abbreviation
          </Typography>
          <TextField
            id="outlined-adornment-amount"
            onChange={(e) => {
              setAbb(e.target.value);
            }}
            size="small"
            variant="outlined"
            className={classes.input}
            value={abbreviation}
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
            <span className={classes.italic}>{caseName}</span>
            <span> ({year}) </span>
            <span> {volume} </span>
            <span>{abbreviation}</span>
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

export default Reported;
