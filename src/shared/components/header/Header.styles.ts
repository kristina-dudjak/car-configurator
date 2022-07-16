import { css } from '@emotion/react';

const header = css`
  background-color: #2e2e38;
  display: flex;
  justify-content: space-between;
`;

const logo = css`
  margin: 20px 32px;
`;

const container__menu = css`
  display: flex;
`;

const button = css`
  margin: 12px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  color: #f1f1f4;
  padding: 8px 16px;
  border: 1px solid #505062;
  background-color: #2e2e38;
`;

const menu = css`
  margin: 12px 20px;
`;

export default { header, logo, container__menu, button, menu };
