/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './CarModels.styles';
import { CarModel, useCarModels } from 'modules';

export const CarModels: React.FC = () => {
  const { cars } = useCarModels();

  return (
    <section css={styles.container__cars}>
      {cars.map((car) => (
        <CarModel car={car} key={car.url} />
      ))}
    </section>
  );
};
