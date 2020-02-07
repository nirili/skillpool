import styled from "styled-components";

export const NavStyle = styled.header`
  position: sticky;
  z-index: 1;
  top: 0;
  height: 50px;
  padding: 14px 0px 0px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  ul {
    text-align: right;
    float: right;
    font-size: 14px;
  }

  ul li {
    display: inline-block;
    text-transform: uppercase;
    float: none;
  }

  ul li:not(:first-child) {
    margin-left: 48px;
  }

  ul li:last-child {
    margin-right: 24px;
  }

  ul li a {
    display: inline-block;
    color: #000;
    outline: none;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 12px;
    letter-spacing: 1px;
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  align-items: center;
  margin-left: 15px;

  a {
    color: #000;
    text-decoration: none;
  }

  img {
    float: left;
    width: 25px;
    margin-right: 6px;
  }

  p {
    display: inline-block;
    color: #10aded;
  }

  @media screen and (max-width: 864px) {
    padding: 0;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 340px) and (max-width: 800px) {
    padding: 14px 60px 0px 0px;
    display: none;
  }
`;
