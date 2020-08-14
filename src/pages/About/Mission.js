import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mission: {
    padding: "40px",
    width: "70%",
    color: "##473F3F",
  },
  title: {
    color: "##473F3F",
    fontSize: 32,
    fontWeight: 500,
  },
  grid: {
    width: "100%",
    margin: "20px 0",
    alignItems: "center",
    paddingLeft: 0,
  },
}));

function Mission() {
  const classes = useStyles();
  return (
    <div className={classes.mission}>
      <Typography variant="h5" className={classes.title}>
        Our Mission
      </Typography>
      <Typography variant="subtitle1">
        We are a platform firm with open thinking, data-based decision making,
        resource integration and system operation pursuing female leadership in
        the global world.
      </Typography>
    </div>
  );
}

export default Mission;
