/** @jsxImportSource @emotion/react */
import { Eye, Google } from 'assets';
import { EmailModal } from 'modules';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { authAtoms, useAuth } from 'shared';
import styles from './Login.styles';

export const Login: React.FC = () => {
  const [name, setName] = useRecoilState(authAtoms.userName);
  const [password, setPassword] = useRecoilState(authAtoms.userPassword);
  const [rememberMe, setRememberMe] = useRecoilState(authAtoms.userRemember);
  const errorMessage = useRecoilValue(authAtoms.authError);
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();

  function signIn(e: React.FormEvent) {
    e.preventDefault();
    auth.signIn();
  }

  return (
    <div css={styles.wrapper}>
      <form css={styles.container} onSubmit={signIn}>
        <h1 css={styles.container__title}>Sign in</h1>
        <div css={styles.container__inputs}>
          <div css={styles.input__group}>
            <label css={styles.input__label}>Name</label>
            <input
              css={styles.input}
              value={name}
              type="text"
              required={true}
              autoComplete={'on'}
              onChange={(e) => setName(e.currentTarget.value)}
            ></input>
          </div>
          <div css={styles.input__group}>
            <label css={styles.input__label}>Password</label>
            <div css={styles.icon__container}>
              <Eye css={styles.icon} onClick={() => setVisible(!visible)} />
              <input
                css={styles.input}
                value={password}
                type={visible ? 'text' : 'password'}
                required={true}
                autoComplete={'on'}
                onChange={(e) => setPassword(e.currentTarget.value)}
              ></input>
            </div>
          </div>
        </div>
        <button
          css={styles.container__google}
          type="button"
          onClick={() => auth.googleSignIn()}
        >
          <Google />
        </button>
        <div css={styles.checkbox__container}>
          <input
            css={styles.checkbox}
            type={'checkbox'}
            id={'rememberMe'}
            onChange={() => setRememberMe(!rememberMe)}
          ></input>
          <label css={styles.input__label} htmlFor="rememberMe">
            Remember me?
          </label>
        </div>
        <button css={styles.container__submit}>Login</button>
        {errorMessage && <p css={styles.container__error}> {errorMessage} </p>}
        <button
          css={styles.container__forgot}
          type="button"
          onClick={() => {
            setShow(true);
          }}
        >
          Forgot password?
        </button>
        <p css={styles.container__redirect}>
          Don't have an account?
          <a css={styles.redirect__link} onClick={() => navigate('/register')}>
            Register
          </a>
        </p>
      </form>
      <EmailModal show={show} onClose={() => setShow(false)} />
    </div>
  );
};
