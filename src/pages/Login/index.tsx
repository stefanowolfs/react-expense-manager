import React from "react";
import { login } from "../../core/store/ducks/app";
import { useAppDispatch } from "../../core/store/hooks";
import { Container } from "./styles";

interface PageProps {}

const Login: React.FC<PageProps> = () => {
  const dispatch = useAppDispatch();

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
