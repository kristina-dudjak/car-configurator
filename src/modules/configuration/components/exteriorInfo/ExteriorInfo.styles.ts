import { css } from '@emotion/react';

const exterior__item = css`
  display: flex;
  flex-direction: row;
  margin: 20px 0 40px 0;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 428px) {
    margin: 10px 0 20px 0;
  }
`;

const exterior__info = css`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

const exterior__item__image = css`
  width: 20%;
`;

const exterior__item__name = css`
  color: #2e2e38;
  font-size: 20px;
  line-height: 28px;
`;

const exterior__item__price = css`
  color: #73738c;
  font-size: 20px;
  white-space: nowrap;
  text-align: center;
`;

export default {
  exterior__item,
  exterior__info,
  exterior__item__image,
  exterior__item__name,
  exterior__item__price,
};
