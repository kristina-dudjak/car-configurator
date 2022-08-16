import { css } from '@emotion/react';

const interior__item = css`
  display: flex;
  flex-direction: row;
  margin: 20px 0 40px 0;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 428px) {
    margin: 10px 0 20px 0;
  }
`;

const interior__info = css`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

const interior__item__image = css`
  width: 20%;
`;

const interior__item__name = css`
  color: #2e2e38;
  font-size: 20px;
  line-height: 28px;
`;

const interior__item__price = css`
  color: #73738c;
  font-size: 20px;
  line-height: 28px;
  white-space: nowrap;
`;

export default {
  interior__item,
  interior__info,
  interior__item__image,
  interior__item__name,
  interior__item__price,
};
