import React, { FunctionComponent } from "react";

import { TitleStyle } from "./Title.style";

export interface TitleProps {
  title: string;
}

const Title: FunctionComponent<TitleProps> = ({ title }) => {
  return (
    <>
      <TitleStyle>
        <h2>{title}</h2>
      </TitleStyle>
    </>
  );
};

export default Title;
