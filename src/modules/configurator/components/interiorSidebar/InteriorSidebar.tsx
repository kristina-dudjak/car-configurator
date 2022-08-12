/** @jsxImportSource @emotion/react */
import { ArrowRight, CheckMark, Info } from 'assets';
import { configurationSelector, finalPriceSelector } from 'modules';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styles from './InteriorSidebar.styles';

interface InteriorSidebarProps {
  onInterior: () => void;
}

export const InteriorSidebar: React.FC<InteriorSidebarProps> = ({
  onInterior,
}) => {
  const configuration = useRecoilValue(configurationSelector.configuration);
  const price = useRecoilValue(finalPriceSelector.finalPrice);
  const navigate = useNavigate();

  return (
    <aside css={styles.container__details}>
      <div css={styles.container__details__item} onClick={onInterior}>
        <span css={styles.container__image}>
          <img src={configuration.interior.thumbnail} css={styles.image} />
          <CheckMark css={styles.checkmark} />
        </span>
        <div css={styles.item__text}>
          <p css={styles.item__name}>{configuration.interior.name}</p>
          <p css={styles.item__description}>Colors</p>
        </div>
      </div>
      <div css={styles.container__details__final}>
        <div css={styles.container__price}>
          <div css={styles.info__item__total}>
            <p css={styles.total}>Total</p>
            <Info css={styles.info} />
          </div>
          <p css={styles.price}>{price} €</p>
        </div>
        <button
          css={styles.button}
          onClick={() =>
            navigate('/configuration/' + configuration.name + '/summary')
          }
        >
          Summary <ArrowRight />
        </button>
      </div>
    </aside>
  );
};
