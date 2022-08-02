/** @jsxImportSource @emotion/react */
import { Eye, Google } from 'assets';
import { authAtoms, useAuth, useDb } from 'modules';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styles from './RegistrationForm.styles';

export const RegistrationForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rememberMe, setRememberMe] = useRecoilState(authAtoms.userRemember);
  const [errorMessage, setErrorMessage] = useRecoilState(authAtoms.authError);
  const [isVisible, setIsVisible] = useState(false);
  const auth = useAuth();
  const db = useDb();

  function register(e: React.FormEvent) {
    e.preventDefault();
    if (email && password && name) auth.createAccount(email, password, name);
  }
  async function updateName(input: string) {
    setName(input);
    const taken = await db.isTaken(input);
    if (taken) setErrorMessage('Name already taken! Try again');
    else setErrorMessage('');
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
          />
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
          />
        </div>
        <div css={styles.input__group}>
          <label css={styles.input__label}>Password</label>
          <div css={styles.icon__container}>
            <Eye css={styles.icon} onClick={() => setIsVisible(!isVisible)} />
            <input
              css={styles.input}
              value={password}
              type={isVisible ? 'text' : 'password'}
              required={true}
              autoComplete={'on'}
              onChange={(e) => setPassword(e.currentTarget.value)}
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
