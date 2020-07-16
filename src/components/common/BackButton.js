import React from "react";
import IconButton from "@material-ui/core/IconButton";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

export default function SearchBar() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <IconButton size="small" onClick={goBack}>
      <KeyboardBackspaceIcon />
      Back
    </IconButton>
  );
}
