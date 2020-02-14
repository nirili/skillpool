import React, { FunctionComponent } from "react";
import Title from "../Title";
import Button from "../Button/";
import {
  AboutInfo,
  ButtonFooter,
  Description,
  Container,
  AboutTitle
} from "./About.style";

const About: FunctionComponent<{}> = () => {
  return (
    <div>
      <Container>
        <AboutTitle>
          <Title title="about" />
        </AboutTitle>
        <AboutInfo>
          <Description>
            <p>
              Bacon ipsum dolor amet sausage pork loin turkey drumstick venison,
              strip steak frankfurter. Chislic swine bacon brisket rump kielbasa
              bresaola andouille short ribs venison chicken ham hock. Corned
              beef brisket pancetta biltong meatloaf flank pastrami burgdoggen
              strip steak.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, fugit
              iste minus aperiam perspiciatis incidunt autem aliquam qui odit
              nam recusandae magni explicabo possimus perferendis. Dolor sunt
              vel consequatur aspernatur harum, ea eligendi assumenda cum ipsa
              saepe. Dolor, aut adipisci.
            </p>
          </Description>
          <ButtonFooter>
            <Button url={"/dashboard"} text="our team" />
          </ButtonFooter>
        </AboutInfo>
      </Container>
    </div>
  );
};

export default About;
