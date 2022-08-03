/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './CarSelect.styles';
import { CarModel, useCarModels } from 'modules';

export const CarSelect: React.FC = () => {
  const cars = useCarModels();

  return (
    <section css={styles.container}>
      <div css={styles.container__text}>
        <h2 css={styles.container__title}>Configure a car</h2>
        <p css={styles.container__description}>
          Pick you favorite model and start configuring.
        </p>
      </div>
      <section css={styles.container__cars}>
        {cars.map((car) => (
          <CarModel car={car} key={car.url} />
        ))}
      </section>
    </section>
  );
};
