/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './Home.styles';

export const Home: React.FC = () => {
  return (
    <section css={styles.container}>
      <div css={styles.container__shared}>
        <span css={styles.shared__text}>View saved configurations</span>
        <button css={styles.shared__button}>Configure a car</button>
      </div>
      <div css={styles.container__empty}>
        <img src={require('assets/front-left-2.png')} css={styles.image} />
        <div css={styles.empty_text}>
          You haven’t configured any cars yet. You may choose to{' '}
          <a css={styles.link}>configure some now.</a>
        </div>
      </div>
    </section>
  );
};
