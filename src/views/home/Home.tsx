/** @jsxImportSource @emotion/react */
import styles from './Home.styles';

export const Home: React.FC = () => {
  return (
    <section css={styles.container}>
      <div css={styles.container__shared}>
        <h2 css={styles.container__shared__text}>View saved configurations</h2>
        <button css={styles.container__shared__button}>Configure a car</button>
      </div>
      <div css={styles.container__empty}>
        <img
          src={require('assets/front-left-2.png')}
          css={styles.container__empty__image}
        />
        <p css={styles.container__empty__text}>
          You haven’t configured any cars yet. You may choose to{' '}
          <a css={styles.container__empty__link}>configure some now.</a>
        </p>
      </div>
    </section>
  );
};
