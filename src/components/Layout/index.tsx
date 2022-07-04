import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import { Container, Content } from "./styles";

function Layout() {
  return (
    <Container>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
}

export default Layout;
