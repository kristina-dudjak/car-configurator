/** @jsxImportSource @emotion/react */
import { carAtoms, ExteriorInfo, InteriorInfo } from 'modules';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styles from './ConfigurationInfo.styles';

export const ConfigurationInfo: React.FC = () => {
  const configuration = useRecoilValue(carAtoms.configuration);
  return (
    <article css={styles.details}>
      <p css={styles.subtitle}>Exterior</p>
      <ExteriorInfo />
      <p css={styles.subtitle}>Interior</p>
      <InteriorInfo />
      <div css={styles.price__item}>
        <p css={styles.total}>Total</p>
        <p css={styles.final__price}>{configuration.price}€</p>
      </div>
    </article>
  );
};
