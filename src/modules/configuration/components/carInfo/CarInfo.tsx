/** @jsxImportSource @emotion/react */
import { Info } from 'assets';
import { carAtoms } from 'modules';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styles from './CarInfo.styles';

export const CarInfo: React.FC = () => {
  const car = useRecoilValue(carAtoms.car);
  const configuration = useRecoilValue(carAtoms.configuration);
  return (
    <div css={styles.car__info}>
      <div css={styles.car__info__item}>
        <p css={styles.car__name}>{configuration.modelName}</p>
        <p css={styles.car__year}>{car.year}</p>
      </div>
      <div css={styles.car__info__item}>
        <div css={styles.info__item__total}>
          <p css={styles.total}>Total</p>
          <Info css={styles.info} />
        </div>
        <p css={styles.total__price}>{configuration.price}€</p>
      </div>
    </div>
  );
};
