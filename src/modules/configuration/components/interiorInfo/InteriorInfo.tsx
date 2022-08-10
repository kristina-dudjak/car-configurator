/** @jsxImportSource @emotion/react */
import { carAtoms } from 'modules';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styles from './InteriorInfo.styles';

export const InteriorInfo: React.FC = () => {
  const configuration = useRecoilValue(carAtoms.configuration);

  return (
    <article css={styles.interior__item}>
      <div css={styles.interior__info}>
        <img
          src={configuration.interior.thumbnail}
          css={styles.interior__item__image}
          alt="Interior image"
        />
        <p css={styles.interior__item__name}>{configuration.interior.name}</p>
      </div>
      <p css={styles.interior__item__price}>{configuration.interior.price}€</p>
    </article>
  );
};
