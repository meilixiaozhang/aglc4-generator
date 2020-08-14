import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  unreported: {
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

function Unreported() {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false);
  const [caseName, setCaseName] = useState("");
  const [year, setYear] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [number, setNumber] = useState("");
  const [pinpoint, setPinpoint] = useState("");

  function handleClick() {
    setClicked(true);
  }

  return (
    <div className={classes.unreported}>
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
          <Typography variant="subtitle2">Unique Court Identifier</Typography>
          <TextField
            id="outlined-adornment-amount"
            onChange={(e) => {
              setIdentifier(e.target.value);
            }}
            size="small"
            variant="outlined"
            className={classes.input}
            value={identifier}
          />
        </FormControl>
        <FormControl fullWidth className={classes.formGroup} variant="outlined">
          <Typography variant="subtitle2">Judgement Number</Typography>
          <TextField
            id="outlined-adornment-amount"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            size="small"
            variant="outlined"
            className={classes.input}
            value={number}
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
            <span> [{year}] </span>
            <span> {identifier} </span>
            <span>{number},</span>
            <span> [{pinpoint}].</span>
          </Typography>
          {/* <Button variant="contained" fullWidth>
            Click to copy
          </Button> */}
        </div>
      )}
    </div>
  );
}

export default Unreported;
