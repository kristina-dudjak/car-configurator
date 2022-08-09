/** @jsxImportSource @emotion/react */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.styles';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section css={styles.container}>
      <div css={styles.container__shared}>
        <p css={styles.container__shared__text}>View saved configurations</p>
        <button
          css={styles.container__shared__button}
          onClick={() => navigate('/car-select')}
        >
          Configure a car
        </button>
      </div>
      <div css={styles.container__empty}>
        <img
          src={require('assets/front-left-2.png')}
          css={styles.container__empty__image}
        />
        <p css={styles.container__empty__text}>
          You haven’t configured any cars yet. You may choose to{' '}
          <a
            css={styles.container__empty__link}
            onClick={() => navigate('/car-select')}
          >
            configure some now.
          </a>
        </p>
      </div>
    </section>
  );
};
