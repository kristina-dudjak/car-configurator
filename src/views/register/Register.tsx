/** @jsxImportSource @emotion/react */
import { Eye, Google } from 'assets';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authAtoms, useAuth, useDb } from 'shared';
import styles from './Register.styles';

export const Register: React.FC = () => {
  const [email, setEmail] = useRecoilState(authAtoms.userEmail);
  const [password, setPassword] = useRecoilState(authAtoms.userPassword);
  const [name, setName] = useRecoilState(authAtoms.userName);
  const [rememberMe, setRememberMe] = useRecoilState(authAtoms.userRemember);
  const [errorMessage, setErrorMessage] = useRecoilState(authAtoms.authError);
  const [visible, setVisible] = useState(false);
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
    <form css={styles.container} onSubmit={register}>
      <h1 css={styles.container__title}>Register</h1>
      <div css={styles.container__inputs}>
        <div css={styles.input__group}>
          <label css={styles.input__label}>Name</label>
          <input
            css={styles.input}
            value={name}
            type="text"
            required={true}
            autoComplete={'on'}
            onChange={(e) => updateName(e.currentTarget.value)}
          ></input>
        </div>
        <div css={styles.input__group}>
          <label css={styles.input__label}>Email</label>
          <input
            css={styles.input}
            value={email}
            type="email"
            required={true}
            autoComplete={'on'}
            onChange={(e) => setEmail(e.currentTarget.value)}
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
      <button css={styles.container__submit}>Register</button>
      {errorMessage && <p css={styles.container__error}> {errorMessage} </p>}
      <p css={styles.container__redirect}>
        Already have an account?
        <a css={styles.redirect__link} onClick={() => navigate('/login')}>
          Login
        </a>
      </p>
    </form>
  );
};
