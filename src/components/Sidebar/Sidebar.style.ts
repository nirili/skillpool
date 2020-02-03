import styled from "styled-components";

export const MenuLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 16px;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 600;
  height: 45px;
  color: #fff;
  margin: 0 30px 30px 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #2e2e33;
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: left; */
  position: sticky;
  height: 100vh;
  /* width: 250px; */
  background: #252529;
  color: #fff;
  font-family: "Roboto", sans-serif;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;
  width: 100%;
`;

export const SidebarMenuItem = styled.li`
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    cursor: pointer;
  }
`;

export const SidebarMenuItemLabel = styled.p`
  font-family: "Roboto", sans-serif;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 600;
  text-align: left;
  padding: 12px 0;
  color: #fff;
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const MenuSignOut = styled.div`
  border-top: 1px solid #2e2e33;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  height: 45px;
  color: #fff;
`;
