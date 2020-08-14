import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  legislation: {
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

function Legislation() {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false);
  const [act, setAct] = useState("");
  const [year, setYear] = useState("");
  const [jurisdiction, setJurisdiction] = useState("");
  const [pinpoint, setPinpoint] = useState("");

  function handleClick() {
    setClicked(true);
  }

  return (
    <div className={classes.legislation}>
      <Typography variant="h5" className={classes.title}>
        Legislation
      </Typography>
      <form className={classes.form}>
        <FormControl fullWidth className={classes.formGroup} variant="outlined">
          <Typography variant="subtitle2">Short Title of the Act</Typography>
          <TextField
            id="outlined-adornment-amount"
            onChange={(e) => {
              setAct(e.target.value);
            }}
            size="small"
            variant="outlined"
            className={classes.input}
            value={act}
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
          <Typography variant="subtitle2">Jurisdiction</Typography>
          <TextField
            id="outlined-adornment-amount"
            onChange={(e) => {
              setJurisdiction(e.target.value);
            }}
            size="small"
            variant="outlined"
            className={classes.input}
            value={jurisdiction}
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
        {clicked && (
          <div>
            <Typography>Your citation will be: </Typography>
            <Typography>
              <span classname={classes.italic}>{act}</span>
              <span className={classes.italic}> {year}</span>
              <span> ({jurisdiction})</span>
              <span> {pinpoint}.</span>
            </Typography>
          </div>
        )}
      </form>
    </div>
  );
}

export default Legislation;
