import React, { FunctionComponent } from "react";
import { ButtonStyle } from "./Button.style";

export interface ButtonProps {
  text: string;
}

const Button: FunctionComponent<ButtonProps> = ({ text }) => {
  return (
    <ButtonStyle>
      <p>{text}</p>
    </ButtonStyle>
  );
};

export default Button;
