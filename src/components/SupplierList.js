import React, { useContext } from "react";
import { SupplierContext } from "../context/context";
import {
  Grid,
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Paper,
  Typography,
} from "@material-ui/core";

const SupplierList = () => {
  const { state } = useContext(SupplierContext);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">Supplier List</Typography>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Supplier Name</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>County</TableCell>
                  <TableCell>Postal Code</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>Branch</TableCell>
                  <TableCell>Street Address</TableCell>
                  <TableCell>Billing</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {state.supplierList.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.supplierName}</TableCell>
                    <TableCell>{row.country}</TableCell>
                    <TableCell>{row.county}</TableCell>
                    <TableCell>{row.postalCode}</TableCell>
                    <TableCell>{row.city}</TableCell>
                    <TableCell>{row.branch}</TableCell>
                    <TableCell>{row.streetAddress}</TableCell>
                    <TableCell>{row.billing}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default SupplierList;
