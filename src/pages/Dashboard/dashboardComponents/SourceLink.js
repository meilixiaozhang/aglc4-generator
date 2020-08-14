import React from "react";
import Link from "@material-ui/core/Link";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  item: {
    width: "200px",
    color: "#473F3F",
    textAlign: "center",
    border: 0,
    elevation: 0,
    borderStyle: "none",
    height: "100px",
    justify: "center",
    alignItems: "center",
    paddingTop: "45px",
    margin: "20px",
  },
}));

function SourceLink(props) {
  const classes = useStyles();
  return (
    <Card className={classes.item}>
      <Link href={props.href} color="inherit">
        {props.icon}
        <Typography>{props.name}</Typography>
      </Link>
    </Card>
  );
}

export default SourceLink;
