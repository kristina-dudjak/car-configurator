/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'shared/hooks';

export const Login: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();

  function signIn(e: React.FormEvent) {
    e.preventDefault();
    auth.signIn(name, password);
  }

  function sendEmail(e: React.FormEvent) {
    e.preventDefault();
    auth.resetPassword(email);
  }

  return (
    <>
      <form onSubmit={signIn}>
        <p>Name</p>
        <input
          value={name}
          type="string"
          required={true}
          onChange={(e) => setName(e.currentTarget.value)}
        ></input>
        <p>Password</p>
        <input
          value={password}
          type="password"
          required={true}
          onChange={(e) => setPassword(e.currentTarget.value)}
        ></input>
        <button>Login</button>
      </form>
      <p>Via google:</p>
      <button onClick={() => auth.googleSignIn()}>Google</button>
      <button
        onClick={() => {
          setForgotPassword(true);
        }}
      >
        Forgot password?
      </button>
      {forgotPassword && (
        <form onSubmit={sendEmail}>
          <>
            <p>Email</p>
            <input
              value={email}
              type="email"
              required={true}
              onChange={(e) => setEmail(e.currentTarget.value)}
            ></input>
          </>
          <button>Send email</button>
        </form>
      )}
      <p>Don't have an account?</p>
      <button onClick={() => navigate('/register')}>Register</button>
    </>
  );
};
