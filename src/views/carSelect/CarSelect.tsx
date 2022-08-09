/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './CarSelect.styles';
import { CarModels } from 'modules';

export const CarSelect: React.FC = () => {
  return (
    <section css={styles.container}>
      <div css={styles.container__text}>
        <h2 css={styles.container__title}>Configure a car</h2>
        <p css={styles.container__description}>
          Pick you favorite model and start configuring.
        </p>
      </div>
      <CarModels />
    </section>
  );
};
