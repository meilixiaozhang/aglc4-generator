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

function Legislation() {
  const classes = useStyles();
  return (
    <div className={classes.legislation}>
      <form className={classes.form}>啦啦啦滴滴嘟嘟嘟</form>
    </div>
  );
}

export default Legislation;