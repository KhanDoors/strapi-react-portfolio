import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
    backgroundColor: "lightblue",
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
      .get("http://localhost:1337/portfolios?user=1")
      .then((res) => setItems(res.data))
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div className={classes.root}>
      <Typography variant="h1" gutterBottom>
        Portfolios
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            {items.map((item) => (
              <Grid item key={item.id}>
                <Card
                  style={{
                    backgroundColor: item.background,
                    width: "40em",
                  }}
                >
                  <Typography variant="h3" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    {item.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Portfolio;
