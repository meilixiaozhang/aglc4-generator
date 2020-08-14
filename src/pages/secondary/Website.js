import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import { CopyToClipboard } from "react-copy-to-clipboard";

const useStyles = makeStyles((theme) => ({
  website: {
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

function Website() {
  const classes = useStyles();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [website, setWebsite] = useState("");
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
  }

  return (
    <div className={classes.website}>
      <Typography variant="h5" className={classes.title}>
        Internet material / Website
      </Typography>
      <form className={classes.form}>
        <FormControl fullWidth className={classes.formGroup} variant="outlined">
          <Typography variant="subtitle2">Author's Firstname</Typography>
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
          <Typography variant="subtitle2">Author's Lastname</Typography>
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
          <Typography variant="subtitle2">Document Title</Typography>
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
          <Typography variant="subtitle2">Full Date</Typography>
          <TextField
            id="outlined-adornment-amount"
            onChange={(e) => {
              setDate(e.target.value);
            }}
            size="small"
            variant="outlined"
            className={classes.input}
            value={date}
          />
        </FormControl>
        <FormControl fullWidth className={classes.formGroup} variant="outlined">
          <Typography variant="subtitle2">Website Name (URL)</Typography>
          <TextField
            id="outlined-adornment-amount"
            onChange={(e) => {
              setWebsite(e.target.value);
            }}
            size="small"
            variant="outlined"
            className={classes.input}
            value={website}
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
            <span>{firstname}</span>
            <span> {lastname}</span>
            <span>, </span>
            <span className={classes.italic}>{title}</span>
            <span> ({date}) </span>
            <span>
              {"<"}
              {website}
              {">"}.
            </span>
          </Typography>
          {/* <Button variant="contained" fullWidth>
            Click to copy
          </Button> */}
        </div>
      )}
    </div>
  );
}

export default Website;
