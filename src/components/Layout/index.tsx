import React from "react";
import { Outlet } from "react-router-dom";
import { logout } from "../../core/store/ducks/app";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import Header from "../Header";
import { Container, Content } from "./styles";

function Layout() {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);

  return (
    <Container>
      <Header token={token} onLogout={() => dispatch(logout())} />
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
}

export default Layout;
