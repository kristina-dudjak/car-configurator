import { css } from '@emotion/react';

const container__nav = css`
  grid-area: footer;
  margin: 0;
  background-color: #fcfcfd;
  color: #2e2e38;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const container__nav__left = css`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 16px;
  font-family: 'Optician Sans';
  letter-spacing: -2px;
  font-size: 28px;
  line-height: 32px;
  align-items: flex-start;
  @media (max-width: 900px) {
    flex-direction: column;
    margin: 0 4px;
  }
`;

const year = css`
  color: #73738c;
  margin-left: 40px;
  @media (max-width: 900px) {
    margin: 0;
    font-size: 24px;
  }
`;

const car = css`
  text-transform: uppercase;
  @media (max-width: 428px) {
    font-size: 24px;
  }
`;

const container__right = css`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-end;
    margin: 0 4px;
  }
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

const total__price = css`
  text-align: right;
  font-size: 24px;
  line-height: 32px;
  margin-right: 32px;
  white-space: nowrap;
  @media (max-width: 428px) {
    font-size: 20px;
    margin: 0;
  }
`;

const button = css`
  background-color: #1e1ed2;
  cursor: pointer;
  color: #fcfcfd;
  border: 0;
  padding: 28px 74px;
  align-self: stretch;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 428px) {
    padding: 14px;
  }
`;

export default {
  container__nav,
  container__nav__left,
  year,
  car,
  container__right,
  info__item__total,
  total,
  info,
  total__price,
  button,
};
