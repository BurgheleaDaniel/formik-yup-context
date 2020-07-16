import React from "react";
import { NavLink } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import ListIcon from "@material-ui/icons/List";

const useStyles = makeStyles({
  root: {
    fontSize: 150,
    color: "lightblue",
  },
});

function Home() {
  const classes = useStyles();

  return (
    <Grid container justify="flex-end" alignItems="baseline">
      <Grid item xs={12} sm={6}>
        <NavLink to="/supplier-create">
          <HomeWorkIcon className={classes.root} />
        </NavLink>
      </Grid>

      <Grid item xs={12} sm={6}>
        <NavLink to="/supplier-list">
          <ListIcon className={classes.root} />
        </NavLink>
      </Grid>
    </Grid>
  );
}

export default Home;
