import React, { useEffect } from "react";
import { useFormik } from "formik";
import { FormikErrors } from "formik/dist/types";
import * as Yup from "yup";
import { Button } from "@mui/material";

const RegisterPageWithYup = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Debe de tener 15 caracteres o menos")
        .required("Requerido"),
      lastName: Yup.string()
        .max(15, "Debe de tener 15 caracteres o menos")
        .required("Requerido"),
      email: Yup.string().email("Debe de ser un email").required("Requerido"),
    }),
  });

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="">First Name</label>
        <input type="text" {...getFieldProps("name")} />
        {errors.name && touched.name && (
          <span className="text-danger ">{errors.name} </span>
        )}
      </div>
      <div className="field">
        <label htmlFor="">Last Name</label>
        <input type="text" {...getFieldProps("lastName")} />
        {errors.lastName && touched.lastName && (
          <span className="text-danger ">{errors.lastName}</span>
        )}
      </div>
      <div className="field">
        <label htmlFor="">Email</label>
        <input type="email" {...getFieldProps("email")} />
        {errors.email && touched.email && (
          <span className="text-danger ">{errors.email}</span>
        )}
      </div>
      <button type="submit">Register</button>
      <Button variant="contained">Contained</Button>
    </form>
  );
};

export default RegisterPageWithYup;
