import React, { FunctionComponent } from "react";
import Sidebar from "../../components/Sidebar";
import UserCard from "../../components/UserCard";
import CollaboratorsList from "../../components/CollaboratorsList";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-template-rows: 72px 1fr;
  grid-template-areas:
    "sidebar head head head"
    "sidebar main main main"
    "sidebar main main main"
    "sidebar main main main";

  @media screen and (max-width: 375px) {
    .grid-container {
      grid-template-columns: 1fr;
      grid-template-rows: 72px 1fr;
      grid-template-areas:
        "head head head"
        "main main main";
    }
  }
`;

const GridSidebar = styled.div`
  grid-area: sidebar;
`;

const GridHeader = styled.div`
  grid-area: head;
  box-shadow: 0 10px 0 0 #eaedf3;
`;

const GridContent = styled.div`
  height: 100vh;
  padding: 20px;
  background: #f0f1f7;
  grid-area: main;
`;

const Dashboard: FunctionComponent<{}> = () => {
  return (
    <>
      <Container>
        <GridSidebar>
          <Sidebar />
        </GridSidebar>
        <GridHeader />
        <GridContent>
          {/* <UserCard /> */}
          <CollaboratorsList />
        </GridContent>
      </Container>
    </>
  );
};

export default Dashboard;
