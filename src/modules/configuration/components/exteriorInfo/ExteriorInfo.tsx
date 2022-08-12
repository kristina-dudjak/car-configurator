/** @jsxImportSource @emotion/react */
import { configurationSelector } from 'modules';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styles from './ExteriorInfo.styles';

export const ExteriorInfo: React.FC = () => {
  const { color, wheel } = useRecoilValue(configurationSelector.configuration);
  return (
    <>
      <article css={styles.exterior__item}>
        <div css={styles.exterior__info}>
          <img
            src={color.thumbnail}
            css={styles.exterior__item__image}
            alt="Color image"
          />
          <p css={styles.exterior__item__name}>{color.name}</p>
        </div>
        <p css={styles.exterior__item__price}>{color.price}€</p>
      </article>
      <article css={styles.exterior__item}>
        <div css={styles.exterior__info}>
          <img
            src={wheel.thumbnail}
            css={styles.exterior__item__image}
            alt="Wheel image"
          />
          <p css={styles.exterior__item__name}>{wheel.name}</p>
        </div>
        <p css={styles.exterior__item__price}>{wheel.price}€</p>
      </article>
    </>
  );
};
