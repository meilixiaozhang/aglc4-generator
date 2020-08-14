import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: "#ebd5d5",
    color: "#685454",
  },
  typo: {
    padding: "0 20px",
  },
  image: {
    width: 80,
    alignItems: "center",
    paddingTop: 10,
    margin: 0,
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body1" display="inline" className={classes.typo}>
          Logo here
        </Typography>
        <Typography variant="body1" display="inline" className={classes.typo}>
          @ {new Date().getFullYear()} X&Z
        </Typography>
        <Link href="/contact" color="inherit">
          <Typography display="inline" className={classes.typo}>
            Contact Us
          </Typography>
        </Link>
      </Container>
    </footer>
  );
}

export default Footer;
