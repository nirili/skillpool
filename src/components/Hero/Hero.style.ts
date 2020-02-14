import styled from "styled-components";

import img from "./background.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin-top: -64px;
`;

export const HeroWrapper = styled.div`
  display: flex;
  width: 90%;
  height: 450px;
  background: #fff;
  box-sizing: border-box;
`;

export const HeroMotto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 45%;
  height: 100%;

  h1 {
    font-size: 3.8em;
  }

  p {
    font-size: 1.62em;
    margin-top: -10px;
  }
`;

export const HeroImg = styled.div`
  display: flex;
  width: 55%;
  height: 100%;
  background-image: url(${img});
  object-fit: cover;
`;
