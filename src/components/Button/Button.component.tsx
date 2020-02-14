import React, { FunctionComponent } from "react";
import { ButtonStyle } from "./Button.style";

export interface ButtonProps {
  text: string;
  url: string;
}

const Button: FunctionComponent<ButtonProps> = ({ text, url }) => {
  return (
    <ButtonStyle to={url}>
      <p>{text}</p>
    </ButtonStyle>
  );
};

export default Button;
