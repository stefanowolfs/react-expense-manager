import React from "react";

interface PageProps {
  onLogin: () => Promise<void>;
}

const Login: React.FC<PageProps> = ({ onLogin }) => {
  return (
    <>
      <h2>Login</h2>;
      <button type="button" onClick={onLogin}>
        Sign In
      </button>
    </>
  );
};

export default Login;
