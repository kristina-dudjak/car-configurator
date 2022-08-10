import { css } from '@emotion/react';

const text = css`
  grid-area: text;
  color: #2e2e38;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  @media (max-width: 428px) {
    font-size: 24px;
  }
`;

const details = css`
  grid-area: details;
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

const subtitle = css`
  padding: 0 0 20px 0;
  border-bottom: 1px solid #9d9daf;
  margin: 0;
  color: #505062;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  @media (max-width: 428px) {
    font-size: 20px;
  }
`;

const price__item = css`
  display: flex;
  flex-direction: row;
  margin: 20px 0 40px 0;
  justify-content: space-between;
  align-items: center;
`;

export default {
  total,
  final__price,
  text,
  details,
  subtitle,
  price__item,
};
