import React, { FunctionComponent } from "react";
import { FormWrapper, FieldStyle } from "./Login.style";
import { Formik, Form } from "formik";

interface MyLoginProps {
  email: string;
  password: string;
}

const Login: FunctionComponent<{}> = () => {
  return (
    <>
      <h3>LOGIN</h3>
      <FormWrapper>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          onSubmit={(values: MyLoginProps, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
          render={({ isSubmitting }) => (
            <Form translate="yes">
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
                Login
              </button>
            </Form>
          )}
        />
      </FormWrapper>
    </>
  );
};

export default Login;
