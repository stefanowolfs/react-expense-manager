import React from "react";
import { Container } from "./styles";

interface PageProps {
  onLogin: () => Promise<void>;
}

const Login: React.FC<PageProps> = ({ onLogin }) => {
  return (
    <Container>
      <h2>Login</h2>
      <button type="button" onClick={onLogin}>
        Sign In
      </button>
    </Container>
  );
};

export default Login;
