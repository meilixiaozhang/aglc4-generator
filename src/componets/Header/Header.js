import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#ebd5d5",
    color: "#685454",
    padding: 0,
  },
  about: {
    padding: "0 40px",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Link href="/" color="inherit">
            <Typography>Home</Typography>
          </Link>
          <Link href="/about" color="inherit">
            <Typography className={classes.about}>About</Typography>
          </Link>
          <Link href="/contact" color="inherit">
            <Typography>Contact</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Header;
