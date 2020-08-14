import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Mission from "./Mission";
import Team from "./Team";

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

function About() {
  const classes = useStyles();
  return (
    <div>
      <Mission />
      <Team />
    </div>
  );
}

export default About;
