import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import theme from "./../theme";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Avatar } from "@material-ui/core";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import Navbar from "./layouts/Navbar";

const useStyles = makeStyles({
  root: {
    width: "100%",
    flexGrow: 1,
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://res.cloudinary.com/khandoors/image/upload/v1590622014/feedback%20form/keee064wcezaqyhmdyb2.jpg')`,
    height: "60vh",
    repeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#00796b",
    fontSize: "4rem",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  container: {
    paddingTop: theme.spacing(3),
  },
  projectTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0, 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    await axios
      .get("http://localhost:1337/portfolios")
      .then((res) => setItems(res.data))
      .catch((err) => {
        console.log(err.response);
      });
  };
  const imgUrl = "http://localhost:1337";

  return (
    <>
      <Navbar>
        <Box className={classes.hero}>
          <Box>
            <h1>The Khandoor</h1>{" "}
          </Box>
        </Box>
        <div className={classes.root}>
          <Container maxWidth="lg" className={classes.container}>
            <Typography variant="h4" className={classes.projectTitle}>
              Projects
            </Typography>
            <Grid container spacing={3}>
              {items.map((item) => (
                <Grid item key={item.id}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <a
                        href="https://www.khandoors.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CardMedia
                          className={classes.media}
                          image={imgUrl + item.image[0].url}
                          title={item.title}
                        />
                      </a>

                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {item.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.cardActions}>
                      <Box className={classes.author}>
                        <Avatar src="https://res.cloudinary.com/khandoors/image/upload/v1561893971/feedback%20form/KhandoorMedia.png" />

                        <Box ml={2}>
                          <Typography variant="subtitle1" component="p">
                            {item.user.username}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            color="textSecondary"
                            component="p"
                          >
                            {item.created_at}
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <a
                          href="https://www.khandoors.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BookmarksIcon />
                        </a>
                      </Box>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </Navbar>
    </>
  );
};

export default Portfolio;
