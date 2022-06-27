import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";
import { fakeAuth } from "../infra/adapter/loginAPI";

interface NavigationProps {
  token: string;
  onLogout: () => void;
}

export default function Router() {
  const [token, setToken] = React.useState<string>(null);

  const handleLogin = async () => {
    const token: string = await fakeAuth();
    setToken(token);
  };

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <BrowserRouter>
      <div>
        <h1>React Router</h1>

        <Navigation token={token} onLogout={handleLogout} />

        <Routes>
          <Route index element={<Login onLogin={handleLogin} />} />
          <Route path="login" element={<Login onLogin={handleLogin} />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
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
