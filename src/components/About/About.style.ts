import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: auto;
  min-height: 89vh;
  padding: 8vh 1vw 4%;

  @media screen and (min-width: 600px) and (max-width: 768px) {
    height: auto;
  }

  @media screen and (min-width: 480px) and (max-width: 599px) {
    padding: 2% 0;
  }

  @media screen and (min-width: 340px) and (max-width: 479px) {
    height: auto;
    padding: 10% 0% 10%;
  }
`;

export const AboutTitle = styled.div`
  width: 100%;
  height: 50px;
  font-size: 1.4rem;
`;

export const AboutInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 45rem;
  height: auto;
  line-height: 30px;
  background-color: #fff;
  margin-top: -40px;
  padding: 0px 30px 20px;
  box-sizing: border-box;
  font-size: 18px;

  @media screen and (min-width: 600px) and (max-width: 768px) {
    width: 100%;
    line-height: 30px;
    margin: 5px 12px 10px;
  }

  @media screen and (min-width: 480px) and (max-width: 599px) {
    height: auto;
    width: 75%;
  }

  @media screen and (min-width: 340px) and (max-width: 479px) {
    width: 100%;
    line-height: 27px;
    padding: 0px 30px 5px;
  }
`;

export const Description = styled.div`
  text-align: justify;
  width: 100%;
`;

export const ButtonFooter = styled.div`
  margin-top: -40px;
  display: flex;
  justify-content: right;
  width: 100%;
`;
