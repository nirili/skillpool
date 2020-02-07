import React, { FunctionComponent } from "react";
import styled from "styled-components";

import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";

const HomeStyling = styled.div`
  /* @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap"); */
  @import url("https://fonts.googleapis.com/css?family=Muli&display=swap");
`;

const Home: FunctionComponent<{}> = () => {
  return (
    <>
      <HomeStyling>
        <Navbar />
        <Hero
          motto="Evaluate your developer skills"
          description="Visualize your improvements and get quick feedbacks"
        />
      </HomeStyling>
    </>
  );
};

export default Home;
