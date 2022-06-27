import React from "react";
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

import { fakeAuth } from "../infra/adapter/loginAPI";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../core/store/configureStore";
import { getToken, setToken } from "../core/store/ducks/authSlice";

interface NavigationProps {
  token: string;
  onLogout: () => void;
}

export default function Router() {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);

  const handleLogin = async () => {
    dispatch(getToken());
  };

  const handleLogout = () => {
    dispatch(setToken());
  };

  return (
    <BrowserRouter>
      <div>
        <h1>React Router</h1>

        <Navigation token={token} onLogout={handleLogout} />

        <Routes>
          <Route index element={<Login onLogin={handleLogin} />} />
          <Route path="login" element={<Login onLogin={handleLogin} />} />
          <Route path="home" element={protectRoute(<Home />)} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const protectRoute = (component: React.ReactNode): React.ReactNode => {
  return <ProtectedRoute>component</ProtectedRoute>;
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
  const token = useSelector((state: RootState) => state.auth.token);

  console.log(token);

  if (!token) {
    return <Navigate to="/Login" replace />;
  }

  return children;
};
