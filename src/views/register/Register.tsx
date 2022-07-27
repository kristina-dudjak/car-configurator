/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, useDb } from 'shared/hooks';

export const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const auth = useAuth();
  const db = useDb();

  async function register(e: React.FormEvent) {
    e.preventDefault();
    if (!errorMessage) {
      auth.createAccount(name, email, password);
    }
  }

  async function updateName(input: string) {
    setName(input);
    const taken = await db.isTaken(input);
    if (taken) {
      setErrorMessage('Name already taken! Try again');
    } else {
      setErrorMessage('');
    }
  }
  return (
    <>
      <form onSubmit={register}>
        <p>Name</p>
        <input
          value={name}
          type="string"
          required={true}
          onChange={(e) => updateName(e.currentTarget.value)}
        ></input>
        {errorMessage && <p> {errorMessage} </p>}
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
      <button onClick={() => auth.googleSignIn()}>Google</button>
      <p>Already have an account?</p>
      <button onClick={() => navigate('/login')}>Login</button>
    </>
  );
};
