/** @jsxImportSource @emotion/react */
import { Eye, Google } from 'assets';
import { authAtoms, useAuth } from 'modules';
import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styles from './LoginForm.styles';

interface LoginFormProps {
  onShow: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onShow }) => {
  const [name, setName] = useRecoilState(authAtoms.userName);
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useRecoilState(authAtoms.userRemember);
  const errorMessage = useRecoilValue(authAtoms.authError);
  const [isVisible, setIsVisible] = useState(false);
  const auth = useAuth();

  function signIn(e: React.FormEvent) {
    e.preventDefault();
    if (!errorMessage && password && name) {
      auth.signIn(password);
    }
  }

  return (
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
      <button css={styles.container__submit}>Login</button>
      <button
        css={styles.container__google}
        type="button"
        onClick={() => auth.googleSignIn()}
      >
        <Google />
      </button>
      {errorMessage && <p css={styles.container__error}> {errorMessage} </p>}
      <button css={styles.container__forgot} type="button" onClick={onShow}>
        Forgot password?
      </button>
    </form>
  );
};
