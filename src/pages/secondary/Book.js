import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dashboard: {
    padding: "40px",
  },
  grid: {
    width: "100%",
    margin: "20px 0",
    alignItems: "center",
    paddingLeft: 0,
  },
}));

function Book() {
  const classes = useStyles();
  return (
    <div className={classes.legislation}>
      <form className={classes.form}>啦啦啦滴滴嘟嘟嘟booooook</form>
    </div>
  );
}

export default Book;
