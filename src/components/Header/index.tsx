import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import React from "react";
import { logout } from "../../core/store/ducks/app";
import { useAppDispatch } from "../../core/store/hooks";
import { Link, LinkContainer } from "./styles";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4">Expense Manager</Typography>
        <LinkContainer>
          <Link to="/home">Home</Link>
          <Link to="/expenses">Expenses</Link>
        </LinkContainer>
        <button type="button" onClick={() => dispatch(logout())}>
          Sign Out
        </button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
