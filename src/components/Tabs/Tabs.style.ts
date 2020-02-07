import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  background: lightblue;
`;

export const TabList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: 50px;
  width: 100%;
`;

export const TabPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  height: 100%;
  width: 100%;
  padding: 30px 40px;
  font-size: 1em;
  line-height: 2;
  box-sizing: border-box;
`;
