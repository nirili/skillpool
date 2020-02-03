import React, { FunctionComponent } from "react";
import {
  Icon,
  SidebarContainer,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuItemLabel,
  MenuLogo,
  MenuSignOut
} from "./Sidebar.style";

const Sidebar: FunctionComponent = () => {
  return (
    <>
      <SidebarContainer>
        <SidebarMenu>
          <MenuLogo>
            <Icon></Icon>
          </MenuLogo>
          <SidebarMenuItem>
            <Icon></Icon>
            <SidebarMenuItemLabel>Dashboard</SidebarMenuItemLabel>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Icon></Icon>
            <SidebarMenuItemLabel>Collaborators list</SidebarMenuItemLabel>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Icon></Icon>
            <SidebarMenuItemLabel>My profile</SidebarMenuItemLabel>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Icon></Icon>
            <SidebarMenuItemLabel>Dashboard</SidebarMenuItemLabel>
          </SidebarMenuItem>
        </SidebarMenu>
        <MenuSignOut>Sign out</MenuSignOut>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
