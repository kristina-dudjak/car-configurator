/** @jsxImportSource @emotion/react */
import { Empty, SavedItems, useSaved } from 'modules';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.styles';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { savedConfigurations } = useSaved();

  return (
    <section css={styles.container}>
      <div css={styles.container__shared}>
        <p css={styles.container__shared__text}>View saved configurations</p>
        <button
          css={styles.container__shared__button}
          onClick={() => navigate('/configuration')}
        >
          Configure a car
        </button>
      </div>
      {savedConfigurations.length === 0 ? <Empty /> : <SavedItems />}
    </section>
  );
};
