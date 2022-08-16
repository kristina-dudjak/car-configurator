import { css } from '@emotion/react';

const car__info = css`
  grid-area: info;
  display: flex;
  justify-content: space-between;
  padding-bottom: 36px;
  margin-bottom: 60px;
  border-bottom: 1px solid #9d9daf;
`;

const car__info__item = css`
  display: flex;
  flex-direction: column;
`;

const car__name = css`
  color: #2e2e38;
  margin: 0;
  letter-spacing: -2px;
  font-family: 'Optician Sans';
  font-size: 48px;
  line-height: 44px;
  text-transform: uppercase;
  @media (max-width: 428px) {
    font-size: 24px;
  }
`;

const car__year = css`
  color: #73738c;
  letter-spacing: -2px;
  font-family: 'Optician Sans';
  font-size: 28px;
  line-height: 32px;
  margin: 0;
  @media (max-width: 428px) {
    font-size: 24px;
  }
`;

const info__item__total = css`
  display: flex;
  align-self: flex-end;
  align-items: center;
  column-gap: 8px;
`;

const info = css`
  color: #9898f0;
`;

const total = css`
  color: #9d9daf;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
`;

const total__price = css`
  color: #2e2e38;
  text-align: right;
  font-size: 24px;
  line-height: 32px;
  margin: 0;
  @media (max-width: 428px) {
    font-size: 20px;
  }
`;

export default {
  car__info,
  car__info__item,
  car__name,
  car__year,
  info__item__total,
  info,
  total,
  total__price,
};
