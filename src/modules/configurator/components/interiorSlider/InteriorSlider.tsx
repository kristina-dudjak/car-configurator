/** @jsxImportSource @emotion/react */
import { ArrowLeft, ArrowRight } from 'assets';
import { useInteriorSlider } from 'modules';
import React, { useState } from 'react';
import styles from './InteriorSlider.styles';

export const InteriorSlider: React.FC = () => {
  const [number, setNumber] = useState(1);
  const imageUrl = useInteriorSlider(number);

  function subtract() {
    if (number !== 1) {
      setNumber(number - 1);
    }
  }
  function add() {
    if (number !== 2) {
      setNumber(number + 1);
    }
  }
  return (
    <article css={styles.car__slider}>
      <img src={imageUrl} css={styles.image} alt={'Interior image'} />
      <div css={styles.picker}>
        <ArrowLeft css={styles.arrow} onClick={subtract} />
        <p css={styles.current__number}>{number}</p>
        <p css={styles.slider__item}>/</p>
        <p css={styles.slider__item}>2</p>
        <ArrowRight css={styles.arrow} onClick={add} />
      </div>
    </article>
  );
};
