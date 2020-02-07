import styled from "styled-components";
import { Field } from "formik";

export const FormWrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 70px;
  }

  label {
    visibility: hidden;
  }

  button {
    width: 200px;
    height: 40px;
    background: gray;
    padding: 5px 10px;
    margin: 20px 0;
    outline: none;
    border: none;
    display: inline-block;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background: lightgray;
      transition: ease 0.9;
    }
  }
`;

export const FieldStyle = styled(Field)`
  margin-bottom: 12px;
  display: inline-block;
  color: black;
  padding: 10px;
  width: 200px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 2px;
  transition: background-color 0.5s ease;

  &:focus {
    background-color: rgba(0, 0, 0, 0.45);
  }
`;
