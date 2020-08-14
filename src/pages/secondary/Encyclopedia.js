import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  encyclopedia: {
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

function Encyclopedia() {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false);
  const [publisher, setPublisher] = useState("");
  const [title, setTitle] = useState("");
  const [volume, setVolume] = useState("");
  const [date, setDate] = useState("");
  const [titleNumber, setTitleNumber] = useState("");
  const [titleName, setTitleName] = useState("");
  const [chapterNumber, setChapterNumber] = useState("");
  const [chapterName, setChapterName] = useState("");
  const [paragraph, setParagraph] = useState("");

  function handleClick() {
    setClicked(true);
  }

  return (
    <div className={classes.encyclopedia}>
      <Typography variant="h5" className={classes.title}>
        Legal Encyclopedia
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
          <Typography variant="subtitle2">Title Number</Typography>
          <TextField
            id="outlined-adornment-amount"
            onChange={(e) => {
              setTitleNumber(e.target.value);
            }}
            size="small"
            variant="outlined"
            className={classes.input}
            value={titleNumber}
          />
        </FormControl>
        <FormControl fullWidth className={classes.formGroup} variant="outlined">
          <Typography variant="subtitle2">Name of Title</Typography>
          <TextField
            id="outlined-adornment-amount"
            onChange={(e) => {
              setTitleName(e.target.value);
            }}
            size="small"
            variant="outlined"
            className={classes.input}
            value={titleName}
          />
        </FormControl>
        <FormControl fullWidth className={classes.formGroup} variant="outlined">
          <Typography variant="subtitle2">Chapter Number</Typography>
          <TextField
            id="outlined-adornment-amount"
            onChange={(e) => {
              setChapterNumber(e.target.value);
            }}
            size="small"
            variant="outlined"
            className={classes.input}
            value={chapterNumber}
          />
        </FormControl>
        <FormControl fullWidth className={classes.formGroup} variant="outlined">
          <Typography variant="subtitle2">Name of Chapter</Typography>
          <TextField
            id="outlined-adornment-amount"
            onChange={(e) => {
              setChapterName(e.target.value);
            }}
            size="small"
            variant="outlined"
            className={classes.input}
            value={chapterName}
          />
        </FormControl>
        <FormControl fullWidth className={classes.formGroup} variant="outlined">
          <Typography variant="subtitle2">Paragraph</Typography>
          <TextField
            id="outlined-adornment-amount"
            onChange={(e) => {
              setParagraph(e.target.value);
            }}
            size="small"
            variant="outlined"
            className={classes.input}
            value={paragraph}
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
            <span> ({date}) </span>
            <span> {titleNumber} </span>
            <span>{titleName},</span>
            <span> '{chapterNumber}</span>
            <span> {chapterNumber}'</span>
            <span> [{paragraph}].</span>
          </Typography>
          {/* <Button variant="contained" fullWidth>
            Click to copy
          </Button> */}
        </div>
      )}
    </div>
  );
}

export default Encyclopedia;
