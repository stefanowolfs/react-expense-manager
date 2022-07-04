import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../../core/store/ducks/app";
import { useAppDispatch } from "../../core/store/hooks";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/expenses">Expenses</NavLink>
      <button type="button" onClick={() => dispatch(logout())}>
        Sign Out
      </button>
    </nav>
  );
};

export default Header;
