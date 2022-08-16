import { css } from '@emotion/react';

const details = css`
  grid-area: details;
`;

const container__subtitle = css`
  padding: 0 0 20px 0;
  border-bottom: 1px solid #c7c7d1;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const subtitle = css`
  color: #505062;
  font-size: 24px;
  line-height: 32px;
  @media (max-width: 428px) {
    font-size: 20px;
  }
`;

const link = css`
  color: #1e1ed2;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
`;

const price__item = css`
  display: flex;
  flex-direction: row;
  margin: 20px 0 40px 0;
  justify-content: space-between;
  align-items: center;
`;

const total = css`
  color: #505062;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`;

const final__price = css`
  color: #2e2e38;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`;

export default {
  details,
  container__subtitle,
  subtitle,
  link,
  price__item,
  total,
  final__price,
};
