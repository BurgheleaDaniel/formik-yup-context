import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./common/Header";
import SupplierCreationForm from "./SupplierCreationForm";

function App() {
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <SupplierCreationForm />
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;