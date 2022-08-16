import { css } from '@emotion/react';

const container__details__item = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 20px 0;
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
  color: #2e2e38;
  margin: 0;
  font-size: 16px;
  line-height: 24px;
`;

const item__price = css`
  color: #73738c;
  margin: 0;
  font-size: 14px;
  line-height: 20px;
`;

export default {
  container__details__item,
  container__image,
  image,
  checkmark,
  item__text,
  item__name,
  item__price,
};
