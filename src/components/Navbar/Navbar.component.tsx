import React, { FunctionComponent } from "react";
import { Logo, NavStyle, NavWrapper } from "./Navbar.style";

const links = [
  {
    id: 1,
    name: "home"
  },
  {
    id: 2,
    name: "about"
  },
  {
    id: 3,
    name: "log in"
  },
  {
    id: 4,
    name: "sign up"
  }
];

const Navbar: FunctionComponent<{}> = () => {
  return (
    <NavStyle>
      <Logo>
        <a href="/">
          <img src="/img/" alt="logo" />
        </a>
      </Logo>
      <NavWrapper>
        <ul>
          {links.map(link => (
            <li key={link.id}>{link.name}</li>
          ))}
        </ul>
      </NavWrapper>
    </NavStyle>
  );
};

export default Navbar;
