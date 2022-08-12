/** @jsxImportSource @emotion/react */
import { ArrowLeft, ArrowRight } from 'assets';
import { useSlider } from 'modules';
import React, { useState } from 'react';
import styles from './CarSlider.styles';

export const CarSlider: React.FC = () => {
  const [number, setNumber] = useState(1);
  const imageUrl = useSlider(number);

  function subtract() {
    if (number !== 1) {
      setNumber(number - 1);
    }
  }
  function add() {
    if (number !== 5) {
      setNumber(number + 1);
    }
  }
  return (
    <article css={styles.car__slider}>
      <img src={imageUrl} css={styles.image} alt={'Car image'} />
      <div css={styles.picker}>
        <ArrowLeft css={styles.arrow} onClick={subtract} />
        <p css={styles.current__number}>{number}</p>
        <p css={styles.slider__item}>/</p>
        <p css={styles.slider__item}>5</p>
        <ArrowRight css={styles.arrow} onClick={add} />
      </div>
    </article>
  );
};
