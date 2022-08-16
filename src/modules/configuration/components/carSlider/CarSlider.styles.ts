import { css } from '@emotion/react';

const car__slider = css`
  grid-area: slider;
  align-self: center;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  align-items: center;
  @media (max-width: 428px) {
    margin: 20px 0 0 0;
    row-gap: 20px;
  }
`;

const image = css`
  width: 60%;
  @media (max-width: 428px) {
    width: 100%;
  }
`;

const picker = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 4px;
`;

const current__number = css`
  color: #2e2e38;
  font-size: 20px;
  line-height: 28px;
`;

const slider__item = css`
  color: #c7c7d1;
  font-size: 20px;
  line-height: 28px;
`;

const arrow = css`
  margin: 0 20px;
`;

export default {
  arrow,
  image,
  current__number,
  picker,
  car__slider,
  slider__item,
};
