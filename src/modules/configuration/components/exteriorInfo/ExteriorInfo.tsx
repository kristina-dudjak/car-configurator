/** @jsxImportSource @emotion/react */
import { carAtoms } from 'modules';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styles from './ExteriorInfo.styles';

export const ExteriorInfo: React.FC = () => {
  const configuration = useRecoilValue(carAtoms.configuration);

  return (
    <>
      <article css={styles.exterior__item}>
        <div css={styles.exterior__info}>
          <img
            src={configuration.color.thumbnail}
            css={styles.exterior__item__image}
            alt="Color image"
          />
          <p css={styles.exterior__item__name}>{configuration.color.name}</p>
        </div>
        <p css={styles.exterior__item__price}>{configuration.color.price}€</p>
      </article>
      <article css={styles.exterior__item}>
        <div css={styles.exterior__info}>
          <img
            src={configuration.wheel.thumbnail}
            css={styles.exterior__item__image}
            alt="Wheel image"
          />
          <p css={styles.exterior__item__name}>{configuration.wheel.name}</p>
        </div>
        <p css={styles.exterior__item__price}>{configuration.wheel.price}€</p>
      </article>
    </>
  );
};
