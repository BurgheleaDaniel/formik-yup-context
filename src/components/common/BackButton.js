import React from "react";
import { useHistory } from "react-router";
import IconButton from "@material-ui/core/IconButton";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

export default function SearchBar() {
  const history = useHistory();
  console.log(history);

  return (
    <IconButton size="small" onClick={() => history.goBack()}>
      <KeyboardBackspaceIcon />
      Back
    </IconButton>
  );
}
