import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
    backgroundColor: "#bdbdbd",
  },
  paper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "50%",
    margin: "auto",
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper component="form" className={classes.paper}>
        <IconButton className={classes.iconButton}>
          <SearchIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="Search Properties"
          inputProps={{ "aria-label": "search properties" }}
        />
      </Paper>
    </div>
  );
}
