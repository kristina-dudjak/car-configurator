/** @jsxImportSource @emotion/react */
import {
  configurationAtoms,
  ExteriorInfo,
  finalPriceSelector,
  InteriorInfo,
} from 'modules';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styles from './ConfigurationInfo.styles';

export const ConfigurationInfo: React.FC = () => {
  const price = useRecoilValue(finalPriceSelector.finalPrice);
  const name = useRecoilValue(configurationAtoms.configurationCarName);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <article css={styles.details}>
      <div css={styles.container__subtitle}>
        <p css={styles.subtitle}>Exterior</p>
        {pathname.includes('/summary') && (
          <p
            css={styles.link}
            onClick={() => navigate('/configuration/' + name + '/exterior')}
          >
            Edit
          </p>
        )}
      </div>
      <ExteriorInfo />
      <div css={styles.container__subtitle}>
        <p css={styles.subtitle}>Interior</p>
        {location.pathname.includes('/summary') && (
          <p
            css={styles.link}
            onClick={() => navigate('/configuration/' + name + '/interior')}
          >
            Edit
          </p>
        )}
      </div>
      <InteriorInfo />
      <div css={styles.price__item}>
        <p css={styles.total}>Total</p>
        <p css={styles.final__price}>{price} €</p>
      </div>
    </article>
  );
};
