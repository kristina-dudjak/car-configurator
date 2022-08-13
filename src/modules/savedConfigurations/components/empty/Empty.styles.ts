import { css } from '@emotion/react';

const container__empty = css`
  grid-area: cars;
  place-self: start center;
`;

const container__empty__image = css`
  opacity: 0.1;
  width: 100%;
`;

const container__empty__text = css`
  color: #73738c;
  font-size: 20px;
  line-height: 28px;
  @media (max-width: 428px) {
    font-size: 16px;
  }
`;

const container__empty__link = css`
  color: #1e1ed2;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    opacity: 0.5;
  }
`;

export default {
  container__empty,
  container__empty__image,
  container__empty__text,
  container__empty__link,
};
