import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  background-color: #2a94c9;
  height: 50px;
  width: 90%;
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.mobile} {
    width: 350px;
    height: 40px;
  }
`;

const NavLink = styled(Link)`
  margin: 0 10px 0 10px;
  text-decoration: none;
  color: #ffd94f;
  font-size: 30px;
  font-weight: bolder;

  @media ${(props) => props.theme.mobile} {
    font-size: 17px;
    margin: 0 5px 0 5px;
  }
`;

const Navigator = () => {
  return (
    <Nav>
      <NavLink to="/">홈</NavLink>
      <NavLink to="/">물고기</NavLink>
      <NavLink to="/Cook">요리</NavLink>
      <NavLink to="/">농장</NavLink>
      <NavLink to="/">무기</NavLink>
      <NavLink to="/">인테리어</NavLink>
      <NavLink to="/">드렛지</NavLink>
    </Nav>
  );
};

export default Navigator;
