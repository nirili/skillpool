import styled from "styled-components";

import img from "./background.jpg";

// export const HeroImg = styled.div`
//   align-items: center;
//   background-image: url(${img});
//   background-position: center top;
//   background-repeat: no-repeat;
//   background-size: cover;
//   display: flex;
//   height: 100vh;
//   max-height: 1200px;
// `;

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: left;
//   font-size: 3em;
//   font-weight: 800;
//   line-height: 48px;
//   width: 100%;
//   text-transform: uppercase;
//   padding: 0px 10vh;

//   h1 {
//     font-size: 2em;
//   }

//   p {
//     font-size: 0.62em;
//   }

//   @media screen and (min-width: 340px) and (max-width: 479px) {
//     margin: 0 auto;
//     padding: 0px 1vh;

//     p {
//       font-size: 0.56em;
//     }
//   }
// `;

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
