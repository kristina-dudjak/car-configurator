/** @jsxImportSource @emotion/react */
import { Car } from 'modules';
import React from 'react';
import styles from './CarModel.styles';

interface CarModelProps {
  car: Car;
}

export const CarModel: React.FC<CarModelProps> = ({ car }) => {
  return (
    <article css={styles.container__car}>
      <img css={styles.car_image} src={car.url} alt={car.name + ' image'} />
      <div css={styles.car__info}>
        <p css={styles.year}>{car.year}</p>
        <h1 css={styles.car_name}>Audi {car.name}</h1>
        <button css={styles.button}>Configure Now</button>
      </div>
    </article>
  );
};
