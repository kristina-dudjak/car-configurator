/** @jsxImportSource @emotion/react */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { authAtoms, useAuth } from 'shared';

export const Login: React.FC = () => {
  const [name, setName] = useRecoilState(authAtoms.userName);
  const [password, setPassword] = useRecoilState(authAtoms.userPassword);
  const [rememberMe, setRememberMe] = useRecoilState(authAtoms.userRemember);
  const errorMessage = useRecoilValue(authAtoms.authError);
  const navigate = useNavigate();
  const auth = useAuth();

  function signIn(e: React.FormEvent) {
    e.preventDefault();
    auth.signIn();
  }

  return (
    <>
      <form onSubmit={signIn}>
        <h1>Sign in</h1>
        <div>
          <div>
            <div>
              <label>Name</label>
              <input
                value={name}
                type="text"
                required={true}
                autoComplete={'on'}
                onChange={(e) => setName(e.currentTarget.value)}
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
            <div>
              <input
                type={'checkbox'}
                id={'rememberMe'}
                onChange={() => setRememberMe(!rememberMe)}
              ></input>
              <label htmlFor="rememberMe">Remember me?</label>
              <button
                type="button"
                onClick={() => auth.googleSignIn()}
              ></button>
            </div>
          </div>
          <div>
            <button type="button">Forgot password?</button>
            {errorMessage != '' && <p>{errorMessage}</p>}
            <button>Login</button>
          </div>
        </div>
        <p>Don't have an account?</p>
        <button onClick={() => navigate('/register')}>Register</button>
      </form>
    </>
  );
};
