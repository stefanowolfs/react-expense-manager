import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { logout } from "../../core/store/ducks/app";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { Container, Content } from "./styles";

interface NavigationProps {
  token: string;
  onLogout: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ token, onLogout }) => {
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      {token && (
        <button type="button" onClick={onLogout}>
          Sign Out
        </button>
      )}
    </nav>
  );
};

function Layout() {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);

  return (
    <Container>
      <Navigation token={token} onLogout={() => dispatch(logout())} />
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
}

export default Layout;
