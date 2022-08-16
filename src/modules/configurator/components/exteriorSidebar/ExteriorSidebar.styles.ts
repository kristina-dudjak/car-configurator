import { css } from '@emotion/react';

const container__details = css`
  grid-area: details;
  background-color: #fcfcfd;
  align-self: stretch;
  border: 1px solid #c7c7d1;
  color: #2e2e38;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const container__details__items = css`
  margin: 40px;
`;

const container__details__item = css`
  display: flex;
  gap: 20px;
  align-items: center;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const container__image = css`
  width: 30%;
  margin: 0;
  display: flex;
`;

const image = css`
  width: 80%;
  border-radius: 60px;
  @media (max-width: 900px) {
    width: 50%;
  }
`;

const checkmark = css`
  align-self: flex-end;
  margin: 0 0 0 -30%;
`;

const item__text = css`
  margin: 20px 0;
`;

const item__name = css`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
`;

const item__description = css`
  color: #73738c;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
  font-size: 11px;
  line-height: 16px;
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

const total = css`
  color: #9d9daf;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
`;

const info = css`
  color: #9898f0;
`;

const price = css`
  font-size: 24px;
  line-height: 32px;
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
  container__details,
  container__details__items,
  container__details__item,
  container__image,
  image,
  checkmark,
  item__text,
  item__name,
  item__description,
  container__details__final,
  container__price,
  info__item__total,
  total,
  info,
  price,
  button,
};
