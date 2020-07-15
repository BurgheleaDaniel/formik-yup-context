import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  typographyStyles: {
    flex: 1,
  },
  iconStyles: {
    color: "#fff",
  },
  toolbarStyles: {
    padding: 15,
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbarStyles}>
        <p className={classes.typographyStyles}>
          <img
            src="https://www.webbeds.com/wp-content/themes/webbeds-v2/assets/images/logo.svg"
            alt="Webbeds logo"
          />
        </p>

        <IconButton className={classes.iconStyles}>
          <Typography>Login</Typography>
          <AcUnitIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
