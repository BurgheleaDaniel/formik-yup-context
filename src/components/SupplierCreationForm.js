import React, { useContext } from "react";
import { TextField, Grid, Button, Typography } from "@material-ui/core";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SupplierContext } from "../context/context";
import TYPES from "../context/types";

const SupplierCreationForm = () => {
  const { dispatch } = useContext(SupplierContext);

  const initialValues = {
    supplierName: "",
    country: "",
    county: "",
    postalCode: "",
    city: "",
    branch: "",
    streetAddress: "",
    billing: "",
  };

  const customHandleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    setTimeout(() => {
      dispatch({ type: TYPES.ADD_SUPPLIER, payload: values });
      resetForm();
      setSubmitting(false);
    }, 500);
  };

  const validationSchema = Yup.object().shape({
    supplierName: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    county: Yup.string().required("Required"),
    postalCode: Yup.string().required("Required"),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={customHandleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h4">Supplier Creation Page</Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="supplierName"
                  name="supplierName"
                  label="Supplier Name *"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={
                    touched.supplierName && errors.supplierName ? true : false
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.supplierName}
                />
                <ErrorMessage name="supplierName" component="div" />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="country"
                  name="country"
                  label="Country *"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={touched.country && errors.country ? true : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.country}
                />
                <ErrorMessage name="country" component="div" />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="county"
                  name="county"
                  label="County *"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={touched.county && errors.county ? true : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.county}
                />
                <ErrorMessage name="county" component="div" />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="postalCode"
                  name="postalCode"
                  label="Postal Code *"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={touched.postalCode && errors.postalCode ? true : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.postalCode}
                />
                <ErrorMessage name="postalCode" component="div" />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="city"
                  name="city"
                  label="City"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="branch"
                  name="branch"
                  label="Branch"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.branch}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="streetAddress"
                  name="streetAddress"
                  label="Street Address"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.streetAddress}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="billing"
                  name="billing"
                  label="Billing"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.billing}
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Button>Submit</Button>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default SupplierCreationForm;
