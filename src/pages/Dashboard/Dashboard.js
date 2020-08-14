import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import SourceLink from "./dashboardComponents/SourceLink";
import {
  primarySources,
  secondarySources,
} from "./dashboardComponents/sources";

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

function CreateLink(props) {
  return <SourceLink href={props.href} icon={props.icon} name={props.name} />;
}

function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.dashboard}>
      <Typography variant="h5" className={classes.title}>
        Choose your source type
      </Typography>
      <Typography className={classes.sourceTitle}>Primary sources</Typography>
      <Grid container className={classes.grid}>
        {primarySources.map(CreateLink)}
      </Grid>

      <Typography className={classes.sourceTitle}>Secondary sources</Typography>
      <Grid container className={classes.grid}>
        {secondarySources.map(CreateLink)}
      </Grid>
    </div>
  );
}

export default Dashboard;
