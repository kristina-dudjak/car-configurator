/** @jsxImportSource @emotion/react */
import { Info } from 'assets';
import { configurationSelector, finalPriceSelector } from 'modules';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styles from './CarInfo.styles';

export const CarInfo: React.FC = () => {
  const { name, year } = useRecoilValue(configurationSelector.configuration);
  const price = useRecoilValue(finalPriceSelector.finalPrice);
  return (
    <div css={styles.car__info}>
      <div css={styles.car__info__item}>
        <p css={styles.car__name}>{name}</p>
        <p css={styles.car__year}>{year}</p>
      </div>
      <div css={styles.car__info__item}>
        <div css={styles.info__item__total}>
          <p css={styles.total}>Total</p>
          <Info css={styles.info} />
        </div>
        <p css={styles.total__price}>{price} €</p>
      </div>
    </div>
  );
};
