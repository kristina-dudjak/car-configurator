/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './Home.styles';

export const Home: React.FC = () => {
  return (
    <section css={styles.container}>
      <div css={styles.container__shared}>
        <span css={styles.container__shared__text}>
          View saved configurations
        </span>
        <button css={styles.container__shared__button}>Configure a car</button>
      </div>
      <div css={styles.container__empty}>
        <img
          src={require('assets/front-left-2.png')}
          css={styles.container__empty__image}
        />
        <span css={styles.container__empty__text}>
          You haven’t configured any cars yet. You may choose to{' '}
          <a css={styles.container__empty__link}>configure some now.</a>
        </span>
      </div>
    </section>
  );
};