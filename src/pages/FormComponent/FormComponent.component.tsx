import React, { FunctionComponent } from "react";
import styled from "styled-components";
import NavBar from "../../components/Navbar";
import SignUp from "../../components/SignUp";
import Login from "../../components/Login";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: #f0f1f7;
`;

const FormContainer = styled.div`
  display: flex;
  width: 760px;
  height: 490px;
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0 10px 14px -12px #777;
`;

const FormImage = styled.div`
  width: 430px;
  height: 100%;
  display: flex;
  justify-content: center;
  background-image: url("/img/signup.png");
`;

const FormRightSide = styled.div`
  width: 330px;
  height: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 14px 0;
`;

const FormComponent: FunctionComponent<{}> = () => {
  return (
    <>
      <NavBar />
      <Container>
        <FormContainer>
          <FormImage></FormImage>
          <FormRightSide>
            <SignUp />
            {/* <Login /> */}
            <p style={{ fontSize: "12px" }}>Already have an account ? Login </p>
          </FormRightSide>
        </FormContainer>
      </Container>
    </>
  );
};

export default FormComponent;
