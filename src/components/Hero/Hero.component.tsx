import React, { FunctionComponent } from "react";
import Button from "../../components/Button";
import { Container, HeroWrapper, HeroMotto, HeroImg } from "./Hero.style";

export interface HeroProps {
  motto: string;
  description: string;
}
const Hero: FunctionComponent<HeroProps> = props => {
  return (
    <Container>
      <HeroWrapper>
        <HeroMotto>
          <h1>{props.motto}</h1>
          <p>{props.description} </p>
          <Button text="create account" />
        </HeroMotto>
        <HeroImg />
      </HeroWrapper>
    </Container>
  );
};

export default Hero;
