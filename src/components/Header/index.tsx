import { AppBar, CssBaseline } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../core/store/ducks/app";
import { useAppDispatch } from "../../core/store/hooks";
import { Container, Link, LinkContainer, Title, Toolbar } from "./styles";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <Container>
      <AppBar position="static">
        <CssBaseline />
        <Toolbar>
          <Title variant="h4" onClick={() => navigate("/home")}>
            Expense Manager
          </Title>
          <LinkContainer>
            <Link
              to="/home"
              active={location.pathname.includes("home").toString()}
            >
              Home
            </Link>
            <Link
              to="/expenses"
              active={location.pathname.includes("expenses").toString()}
            >
              Expenses
            </Link>
          </LinkContainer>
          <button type="button" onClick={() => dispatch(logout())}>
            Sign Out
          </button>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
