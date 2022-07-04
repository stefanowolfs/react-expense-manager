import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  token: string;
  onLogout: () => void;
}

const Header: React.FC<Props> = ({ token, onLogout }) => {
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      {token && (
        <button type="button" onClick={onLogout}>
          Sign Out
        </button>
      )}
    </nav>
  );
};

export default Header;
