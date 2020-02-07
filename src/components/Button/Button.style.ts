import styled from "styled-components";

export const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  height: 40px;
  justify-content: center;
  /* margin: 0 auto; */
  width: 170px;
  text-decoration: none;
  margin-top: 20px;
  padding-top: 25px;
  box-sizing: border-box;

  p {
    margin: 23px 0;
    margin-right: 0%;
  }

  &:hover {
    opacity: 0.8;
    transition: 0.1s ease-in;
  }
`;
