import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#e53320" },
    brand: { main: "#e53320" },
  },

  overrides: {
    MuiButton: {
      root: {
        color: "#fff",
        backgroundColor: "#e53320",
        variant: "contained",
        // paddingLeft: 100,
        // paddingRight: 100,
        // marginTop: 20,
      },
    },
  },
});

export default theme;
