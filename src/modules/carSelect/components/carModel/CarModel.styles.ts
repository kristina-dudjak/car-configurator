import { css } from '@emotion/react';

const container__car = css`
  background-color: #fcfcfd;
  overflow-x: hidden;
  min-width: 44%;
  margin: 0 2% 10% 0;
  display: flex;
  flex-direction: column;
  @media (max-width: 428px) {
    min-width: 84%;
  }
`;

const car_images = css`
  min-width: 100%;
  margin: 0 -20% 0 -92%;
`;

const year = css`
  font-size: 28px;
  line-height: 32px;
  color: #73738c;
  @media (max-width: 428px) {
    font-size: 20px;
  }
`;

const car_name = css`
  font-size: 48px;
  line-height: 44px;
  letter-spacing: -2px;
  color: #2e2e38;
  text-transform: uppercase;
  @media (max-width: 428px) {
    font-size: 24px;
  }
`;

const button = css`
  background-color: #1e1ed2;
  color: #f1f1f4;
  border-color: #1e1ed2;
  border: 0;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  padding: 12px 20px;
  margin: 0 50% 0 0;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 428px) {
    margin: 0 40% 0 0;
  }
`;

const car__info = css`
  margin: 60px 0 40px 40px;
`;

export default {
  container__car,
  car_images,
  year,
  car_name,
  button,
  car__info,
};
