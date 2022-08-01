/** @jsxImportSource @emotion/react */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authAtoms, useAuth, useDb } from 'shared';

export const Register: React.FC = () => {
  const [email, setEmail] = useRecoilState(authAtoms.userEmail);
  const [password, setPassword] = useRecoilState(authAtoms.userPassword);
  const [name, setName] = useRecoilState(authAtoms.userName);
  const [rememberMe, setRememberMe] = useRecoilState(authAtoms.userRemember);
  const [errorMessage, setErrorMessage] = useRecoilState(authAtoms.authError);
  const navigate = useNavigate();
  const auth = useAuth();
  const db = useDb();

  function register(e: React.FormEvent) {
    e.preventDefault();
    if (!errorMessage && email && password && name) {
      auth.createAccount();
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
    <form onSubmit={register}>
      <h1>Register</h1>
      <div>
        <div>
          <label>Name</label>
          <input
            value={name}
            type="text"
            required={true}
            autoComplete={'on'}
            onChange={(e) => updateName(e.currentTarget.value)}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            value={email}
            type="email"
            required={true}
            autoComplete={'on'}
            onChange={(e) => setEmail(e.currentTarget.value)}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input
              value={password}
              type={'password'}
              required={true}
              autoComplete={'on'}
              onChange={(e) => setPassword(e.currentTarget.value)}
            ></input>
          </div>
        </div>
      </div>
      <button type="button" onClick={() => auth.googleSignIn()}></button>
      <div>
        <input
          type={'checkbox'}
          id={'rememberMe'}
          onChange={() => setRememberMe(!rememberMe)}
        ></input>
        <label htmlFor="rememberMe">Remember me?</label>
      </div>
      <button>Register</button>
      {errorMessage && <p> {errorMessage} </p>}
      <p>
        Already have an account?
        <a onClick={() => navigate('/login')}>Login</a>
      </p>
    </form>
  );
};
