import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./common/Header";
import SupplierCreationForm from "./SupplierCreationForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import SupplierList from "./SupplierList";
import SearchBar from "./common/SearchBar";
import BackButton from "./common/BackButton";

function App({ history }) {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Header />
          <SearchBar />
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2}>
            <BackButton />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Router>
              <Switch>
                <Route path="/supplier-create">
                  <SupplierCreationForm />
                </Route>
                <Route path="/supplier-list">
                  <SupplierList />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Router>
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
