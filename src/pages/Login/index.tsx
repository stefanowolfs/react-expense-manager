import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../core/store/ducks/app";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { Container } from "./styles";

interface PageProps {}

const Login: React.FC<PageProps> = () => {
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate("/home");
  }, [navigate, token]);

  return (
    <Container>
      <h2>Login</h2>
      <button type="button" onClick={() => dispatch(login())}>
        Sign In
      </button>
    </Container>
  );
};

export default Login;
