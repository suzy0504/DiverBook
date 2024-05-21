import React from "react";
import Navigator from "../components/Navigator";
import styled from "styled-components";

const Header = styled.div`
  height: 70px;
  display: flex;
  background: #2a94c9;
  color: white;
  align-items: center;

  @media ${(props) => props.theme.mobile} {
    height: 70px;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  background: #2a94c9;
  color: white;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: 60px;
  }
`;

const layoutStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function Layout({ children }) {
  return (
    <div>
      <Header>데이브 더 다이버 도감</Header>
      <br />
      <Navigator />

      <div style={{ ...layoutStyles }}>{children}</div>

      <Footer />
    </div>
  );
}

export default Layout;
