import { css } from '@emotion/react';

const container__nav = css`
  grid-area: nav;
  background-color: white;
  color: #2e2e38;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const container__nav__item = css`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  @media (max-width: 428px) {
    gap: 8px;
  }
`;

const arrow__back = css`
  margin: auto 0;
  padding: 0 0 0 44px;
  @media (max-width: 428px) {
    padding: 0 4px 0 8px;
  }
`;

const year = css`
  color: #9d9daf;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: -2px;
  @media (max-width: 428px) {
    font-size: 20px;
  }
`;

const car = css`
  color: #2e2e38;
  letter-spacing: -2px;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  text-align: center;
  @media (max-width: 428px) {
    font-size: 20px;
  }
`;

const container__nav__links = css`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-items: stretch;
  @media (max-width: 428px) {
    flex-direction: column;
    gap: 0;
  }
`;

const edit__link = css`
  color: #1e1ed2;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 16px 0;
  cursor: pointer;
  text-align: center;
  &:hover {
    opacity: 0.5;
  }
  @media (max-width: 428px) {
    padding: 12px 8px;
  }
`;

const delete__link = css`
  color: #d2341e;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  padding: 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  @media (max-width: 428px) {
    padding: 12px 8px;
  }
`;

export default {
  container__nav,
  container__nav__item,
  arrow__back,
  year,
  car,
  container__nav__links,
  edit__link,
  delete__link,
};
