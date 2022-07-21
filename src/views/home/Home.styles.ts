import { css } from '@emotion/react';

const container = css`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const container__shared = css`
  display: flex;
  justify-content: space-between;
  margin: 76px 0 0;
  flex-shrink: 0;
`;

const shared__text = css`
  font-weight: 400;
  font-size: 24px;
  color: #2e2e38;
`;

const shared__button = css`
  background-color: #1e1ed2;
  color: #f1f1f4;
  border-color: #1e1ed2;
  border: 0;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  padding: 12px 20px;
`;

const container__empty = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 76px;
`;

const image = css`
  opacity: 0.1;
  width: 100%;
`;

const empty_text = css`
  color: #73738c;
  font-size: 20px;
  text-align: center;
  line-height: 28px;
  max-width: 50%;
`;

const link = css`
  color: #1e1ed2;
  cursor: pointer;
  font-weight: 700;
`;

export default {
  container,
  container__shared,
  shared__text,
  shared__button,
  container__empty,
  image,
  empty_text,
  link,
};
