import React, { FunctionComponent } from "react";
import { FormWrapper, FieldStyle } from "./SignUp.style";
import { Formik, Form } from "formik";

interface MyFormProps {
  lastName: string;
  firstName: string;
  email: string;
  password: string;
}

const SignUp: FunctionComponent<{}> = () => {
  return (
    <>
      <h3>CREATE ACCOUNT</h3>
      <FormWrapper>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: ""
          }}
          onSubmit={(values: MyFormProps, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
          render={({ isSubmitting }) => (
            <Form translate="yes">
              <label htmlFor="firstName">First Name</label>
              <FieldStyle
                id="firstName"
                name="firstName"
                placeholder="Your firstname"
                type="text"
              />

              <label htmlFor="lastName">Last Name</label>
              <FieldStyle
                id="lastName"
                name="lastName"
                placeholder="Your lastname"
                type="text"
              />

              <label htmlFor="email">Email</label>
              <FieldStyle
                id="email"
                name="email"
                placeholder="Your email address"
                type="email"
              />

              <label htmlFor="password">password</label>
              <FieldStyle
                id="password"
                name="password"
                placeholder="Your password"
                type="password"
              />

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        />
      </FormWrapper>
    </>
  );
};

export default SignUp;
