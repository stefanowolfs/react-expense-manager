import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";
import { getToken } from "../core/store/ducks/auth";
import { useAppDispatch, useAppSelector } from "../core/store/hooks";
import { login, startApp } from "../core/store/ducks/app";

interface NavigationProps {
  token: string;
  onLogout: () => void;
}

export default function Router() {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    dispatch(startApp());
  }, []);

  const handleLogin = async () => {
    dispatch(getToken());
  };

  const handleLogout = () => {
    dispatch(login());
  };

  return (
    <BrowserRouter>
      <>
        {token && <Navigation token={token} onLogout={handleLogout} />}
        <Routes>
          <Route index element={<Login onLogin={handleLogin} />} />
          <Route path="login" element={<Login onLogin={handleLogin} />} />
          <Route path="home" element={protectRoute(<Home />)} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

const protectRoute = (component: React.ReactNode): React.ReactNode => {
  return <ProtectedRoute>{component}</ProtectedRoute>;
};

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

const ProtectedRoute: React.FC<any> = ({ children }) => {
  const token = useAppSelector((state) => state.auth.token);
  if (!token) return <Navigate to="/Login" replace />;
  return children;
};
