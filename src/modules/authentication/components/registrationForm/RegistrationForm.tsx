/** @jsxImportSource @emotion/react */
import { Eye, Google } from 'assets';
import { authAtoms, useAuth, useDb } from 'modules';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styles from './RegistrationForm.styles';

export const RegistrationForm: React.FC = () => {
  const [user, setUser] = useState({ email: '', password: '', name: '' });
  const [rememberMe, setRememberMe] = useRecoilState(authAtoms.userRemember);
  const [errorMessage, setErrorMessage] = useRecoilState(authAtoms.authError);
  const [isVisible, setIsVisible] = useState(false);
  const auth = useAuth();
  const db = useDb();

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (e.currentTarget.name === 'name') {
      const taken = await db.isTaken(e.currentTarget.value);
      if (taken) setErrorMessage('Name already taken! Try again');
      else setErrorMessage('');
    }
  }

  function register(e: React.FormEvent) {
    e.preventDefault();
    auth.createAccount(user.email, user.password, user.name);
  }

  return (
    <form css={styles.container} onSubmit={register}>
      <h1 css={styles.container__title}>Register</h1>
      <div css={styles.container__inputs}>
        <div css={styles.input__group}>
          <label css={styles.input__label}>Name</label>
          <input
            name="name"
            css={styles.input}
            value={user.name}
            type="text"
            required={true}
            autoComplete={'on'}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div css={styles.input__group}>
          <label css={styles.input__label}>Email</label>
          <input
            name="email"
            css={styles.input}
            value={user.email}
            type="email"
            required={true}
            autoComplete={'on'}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div css={styles.input__group}>
          <label css={styles.input__label}>Password</label>
          <div css={styles.icon__container}>
            <Eye css={styles.icon} onClick={() => setIsVisible(!isVisible)} />
            <input
              name="password"
              css={styles.input}
              value={user.password}
              type={isVisible ? 'text' : 'password'}
              required={true}
              autoComplete={'on'}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      </div>
      <div css={styles.checkbox__container}>
        <input
          css={styles.checkbox}
          type={'checkbox'}
          id={'rememberMe'}
          onChange={() => setRememberMe(!rememberMe)}
        />
        <label css={styles.input__label} htmlFor="rememberMe">
          Remember me?
        </label>
      </div>
      <button css={styles.container__submit}>Register</button>
      <button
        css={styles.container__google}
        type="button"
        onClick={() => auth.googleSignIn()}
      >
        <Google />
      </button>
      {errorMessage && <p css={styles.container__error}> {errorMessage} </p>}
    </form>
  );
};
