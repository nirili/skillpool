import React, { FunctionComponent } from "react";
import { Formik, FormikProps, Form, Field, ErrorMessage } from "formik";

interface MyFormProps {
  lastName: string;
  firstName: string;
  email: string;
  password: string;
}

const FormComponent: FunctionComponent<{}> = () => {
  const initialValues: MyFormProps = {
    lastName: "",
    firstName: "",
    email: "",
    password: ""
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={values => {
          const errors = { email: "" };
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Your email address is invalid";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form translate='yes'>
            <Field type="lastName" name="lastName" />
            <ErrorMessage name="lastName" component="div" />
            <Field type="firstName" name="firstName" />
            <ErrorMessage name="firstName" component="div" />
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormComponent;
