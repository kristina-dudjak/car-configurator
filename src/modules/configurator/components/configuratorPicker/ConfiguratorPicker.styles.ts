import { css } from '@emotion/react';

const container__details = css`
  grid-area: details;
  background-color: #fcfcfd;
  align-self: stretch;
  border: 1px solid #c7c7d1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const container__title = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const title = css`
  color: #2e2e38;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  margin: 24px 40px;
`;

const title__close = css`
  color: #2e2e38;
  margin: 24px 40px;
`;

const container__details__items = css`
  margin: 40px;
`;

const container__details__final = css`
  display: flex;
  flex-direction: column;
`;

const container__price = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 40px;
`;

const info__item__total = css`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

const info = css`
  color: #9898f0;
`;

const price = css`
  color: #2e2e38;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
`;

const total = css`
  color: #9d9daf;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
`;

const button = css`
  background-color: #1e1ed2;
  cursor: pointer;
  color: #fcfcfd;
  border: 0;
  padding: 22px 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  &:hover {
    opacity: 0.7;
  }
`;

export default {
  title,
  title__close,
  container__details,
  container__details__items,
  container__price,
  container__title,
  info__item__total,
  info,
  price,
  total,
  button,
  container__details__final,
};