import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

const useStyles = makeStyles((theme) => ({
  team: {
    padding: "40px",
    color: "##473F3F",
  },
  title: {
    color: "##473F3F",
    fontSize: 32,
    fontWeight: 500,
  },
  card: {
    width: "350px",
    margin: "20px",
  },
  container: {
    position: "relative",
    width: "100%",
    "&:hover": {
      "& $overlay": {
        opacity: 1,
      },
    },
  },
  image: {
    display: "block",
    width: "100%",
    height: "auto",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    rigth: 0,
    backgroundColor: "#ea8a8a",
    width: "100%",
    opacity: 0,
  },
  text: {
    color: "#f2f2f2",
    width: "90%",
    position: "absolute",
    top: "5%",
    left: "5%",
    textAlign: "center",
  },
  content: {
    marginLeft: "10px",
  },
  socials: {
    marginLeft: "auto",
    marginRight: "20px",
  },
  icon: {
    margin: "0 5px",
    color: "##473F3F",
  },
}));

function Team() {
  const classes = useStyles();
  return (
    <div className={classes.team}>
      <Typography variant="h5" className={classes.title}>
        Team
      </Typography>
      <Grid container className={classes.grid}>
        <Card className={classes.card}>
          <CardMedia>
            <Container className={classes.container}>
              <img
                src={require("../../images/CeciXie.jpeg")}
                alt="ceci"
                className={classes.image}
              />
              <div className={classes.overlay}>
                <Typography className={classes.text}>
                  Passionate and professional project manager working in
                  automotive industry with top listed companies. Experienced
                  operating through China and the state with international law
                  and politics background in the past years with super energy
                  and sparkling intelligence in the eyes. Detail-oriented to
                  meet client’s requirements through high standing standards and
                  global view.
                </Typography>
              </div>
            </Container>
          </CardMedia>
          <CardContent className={classes.content}>
            <Typography>Ceci Xie</Typography>
            <Typography>Co-founder, BD</Typography>
          </CardContent>
          <CardActions>
            <div className={classes.socials}>
              <Link
                href="https://www.instagram.com/ceciii_x/"
                color="inherit"
                className={classes.icon}
              >
                <InstagramIcon />
              </Link>
              <Link
                key="Email"
                component="a"
                color="inherit"
                className={classes.icon}
              >
                <AlternateEmailIcon />
              </Link>
            </div>
          </CardActions>
        </Card>

        <Card className={classes.card}>
          <CardMedia>
            <Container className={classes.container}>
              <img
                src={require("../../images/MandyZhang.jpeg")}
                alt="mandy"
                className={classes.image}
              />
              <div className={classes.overlay}>
                <Typography className={classes.text}>
                  Motivated and driven designer and developer with experience
                  creating custom websites through JavaScript and CSS. Skilled
                  in collaborating with all members to achieve objectives.
                  Technical proficiency in front-end development, back-end
                  development, mobile-first responsive design and databases.
                </Typography>
              </div>
            </Container>
          </CardMedia>
          <CardContent className={classes.content}>
            <Typography>Mandy Zhang</Typography>
            <Typography>Co-founder, dev</Typography>
          </CardContent>
          <CardActions>
            <div className={classes.socials}>
              <Link
                href="https://www.linkedin.com/in/xiaoran-zhang/"
                color="inherit"
                className={classes.icon}
              >
                <LinkedInIcon />
              </Link>
              <Link
                href="https://github.com/meilixiaozhang"
                color="inherit"
                className={classes.icon}
              >
                <GitHubIcon />
              </Link>
            </div>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
}

export default Team;
