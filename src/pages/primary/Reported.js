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

function Reported() {
  const classes = useStyles();
  return (
    <div className={classes.reported}>
      <form className={classes.form}>啦啦啦滴滴嘟嘟嘟niuniunidefan</form>
    </div>
  );
}

export default Reported;
