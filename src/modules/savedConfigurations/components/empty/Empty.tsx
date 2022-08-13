/** @jsxImportSource @emotion/react */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Empty.styles';

export const Empty: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div css={styles.container__empty}>
      <img
        src={require('assets/front-left-2.png')}
        css={styles.container__empty__image}
      />
      <p css={styles.container__empty__text}>
        You haven’t configured any cars yet. You may choose to{' '}
        <a
          css={styles.container__empty__link}
          onClick={() => navigate('/configuration')}
        >
          configure some now.
        </a>
      </p>
    </div>
  );
};
