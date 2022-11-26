import React, { useEffect } from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import { FormikErrors } from "formik/dist/types";
import * as Yup from "yup";

const RegisterPageComponents = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          isActive: false,
          typeJob: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Debe de ser un email")
            .required("Requerido"),
          isActive: Yup.boolean(),
        })}
      >
        {(formik) => (
          <Form>
            <div className="field">
              <label htmlFor="">First Name</label>
              <Field type="text" name="name" />
              <ErrorMessage
                name="name"
                component="span"
                className="text-danger"
              />
            </div>
            <div className="field">
              <label htmlFor="">Last Name</label>
              <Field type="text" name="lastName" />
              <ErrorMessage
                name="lastName"
                component="span"
                className="text-danger"
              />
            </div>
            <div className="field">
              <label htmlFor="">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage
                name="email"
                component="span"
                className="text-danger"
              />
            </div>
            <div className="field">
              <label htmlFor="">Elige el puesto de trabajo</label>
              <Field name="typeJob" as="select">
                <option value="Employee">Employee</option>
                <option value="Student">Student</option>
              </Field>
              <ErrorMessage
                name="isActive"
                component="span"
                className="text-danger"
              />
            </div>
            <div className="field">
              <label htmlFor="">Eres un user activo?</label>
              <Field type="checkbox" name="isActive" />
              <ErrorMessage
                name="isActive"
                component="span"
                className="text-danger"
              />
            </div>
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterPageComponents;
