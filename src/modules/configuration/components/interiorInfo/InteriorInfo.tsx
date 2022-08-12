/** @jsxImportSource @emotion/react */
import { configurationSelector } from 'modules';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styles from './InteriorInfo.styles';

export const InteriorInfo: React.FC = () => {
  const { interior } = useRecoilValue(configurationSelector.configuration);

  return (
    <article css={styles.interior__item}>
      <div css={styles.interior__info}>
        <img
          src={interior.thumbnail}
          css={styles.interior__item__image}
          alt="Interior image"
        />
        <p css={styles.interior__item__name}>{interior.name}</p>
      </div>
      <p css={styles.interior__item__price}>{interior.price} €</p>
    </article>
  );
};
