/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  function register(e: React.FormEvent) {
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={register}>
        <p>Name</p>
        <input
          value={name}
          type="string"
          required={true}
          onChange={(e) => setName(e.currentTarget.value)}
        ></input>
        <p>Email</p>
        <input
          value={email}
          type="email"
          required={true}
          onChange={(e) => setEmail(e.currentTarget.value)}
        ></input>
        <p>Password</p>
        <input
          value={password}
          type="password"
          required={true}
          onChange={(e) => setPassword(e.currentTarget.value)}
        ></input>
        <button>Submit</button>
      </form>
      <p>Via google:</p>
      <button>Google</button>
      <p>Already have an account?</p>
      <button onClick={() => navigate('/login')}>Login</button>
    </>
  );
};
