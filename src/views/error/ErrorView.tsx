/** @jsxImportSource @emotion/react */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ErrorView.styles';

export const ErrorView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div css={styles.container}>
      <span css={styles.container__text}>
        <h1 css={styles.title}>404</h1>
        <p css={styles.description}>
          The page you are looking for does not exist.
        </p>
      </span>
      <button css={styles.button} onClick={() => navigate('/')}>
        Return to home page
      </button>
    </div>
  );
};
