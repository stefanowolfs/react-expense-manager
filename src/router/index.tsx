import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";
import { useAppDispatch, useAppSelector } from "../core/store/hooks";
import { startApp } from "../core/store/ducks/app";
import Layout from "../components/Layout";
import Expenses from "../pages/Expenses";

export default function Router() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startApp());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={protectRoute(<Layout />)}>
          <Route path="home" element={<Home />} />
          <Route path="expenses" element={<Expenses />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

const protectRoute = (component: React.ReactNode): React.ReactNode => {
  return <ProtectedRoute>{component}</ProtectedRoute>;
};

const ProtectedRoute: React.FC<any> = ({ children }) => {
  const token = useAppSelector((state) => state.auth.token);
  if (!token) return <Navigate to="/login" replace />;
  return children;
};
