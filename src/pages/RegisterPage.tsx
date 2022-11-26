import { useFormik } from "formik";
import { FormikErrors } from "formik/dist/types";
import React, { useEffect } from "react";

interface FormValues {
  name: string;
  lastName: string;
  email: string;
}

const RegisterPage = () => {
  const validate = ({ email, lastName, name }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!name) {
      errors.name = "Required";
    } else if (name.length >= 10) {
      errors.name = "must be 15 characters or less";
    }

    if (!lastName) {
      errors.lastName = "Required";
    } else if (lastName.length >= 10) {
      errors.lastName = "must be 15 characters or less";
    }

    if (!email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        lastName: "",
        email: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validate: validate,
    });

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="">First Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.name ||
          (touched.name && (
            <span className="alert text-red ">{errors.name} </span>
          ))}
      </div>
      <div className="field">
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.lastName ||
          (touched.lastName && (
            <span className="alert text-red ">{errors.lastName}</span>
          ))}
      </div>
      <div className="field">
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.email ||
          (touched.email && (
            <span className="alert text-red ">{errors.email}</span>
          ))}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
