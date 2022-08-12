/** @jsxImportSource @emotion/react */
import { ArrowRight, CheckMark, Info } from 'assets';
import { configurationSelector, finalPriceSelector, useEditing } from 'modules';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { EditedItem } from 'shared';
import styles from './ExteriorSidebar.styles';

interface ExteriorSidebarProps {
  onColor: () => void;
  onWheel: () => void;
}

export const ExteriorSidebar: React.FC<ExteriorSidebarProps> = ({
  onColor,
  onWheel,
}) => {
  const configuration = useRecoilValue(configurationSelector.configuration);
  const price = useRecoilValue(finalPriceSelector.finalPrice);
  const navigate = useNavigate();
  const { editing } = useEditing();

  return (
    <aside css={styles.container__details}>
      {editing !== EditedItem.Interior && (
        <div css={styles.container__details__items}>
          <div css={styles.container__details__item} onClick={onColor}>
            <span css={styles.container__image}>
              <img src={configuration.color.thumbnail} css={styles.image} />
              <CheckMark css={styles.checkmark} />
            </span>
            <div css={styles.item__text}>
              <p css={styles.item__name}>{configuration.color.name}</p>
              <p css={styles.item__description}>Paint color</p>
            </div>
          </div>
          <div css={styles.container__details__item} onClick={onWheel}>
            <span css={styles.container__image}>
              <img src={configuration.wheel.thumbnail} css={styles.image} />
              <CheckMark css={styles.checkmark} />
            </span>
            <div css={styles.item__text}>
              <p css={styles.item__name}>{configuration.wheel.name}</p>
              <p css={styles.item__description}>Wheels</p>
            </div>
          </div>
        </div>
      )}
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
            navigate('/configuration/' + configuration.name + '/interior')
          }
        >
          Interior <ArrowRight />
        </button>
      </div>
    </aside>
  );
};
