import { css } from '@emotion/react';

const container = css`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2%;
  height: 100%;
  grid-template-areas:
    'nav nav nav nav nav nav nav nav nav nav nav nav'
    '. . . . sub sub sub sub . . . .'
    '. slider slider slider slider slider slider slider slider slider slider .'
    '. info info info info info info info info info info .'
    '. text text text . details details details details details details .'
    'footer footer footer footer footer footer footer footer footer footer footer footer';
  @media (max-width: 428px) {
    grid-template-areas:
      'nav nav nav nav nav nav nav nav nav nav nav nav'
      '. . . . sub sub sub sub . . . .'
      '. slider slider slider slider slider slider slider slider slider slider .'
      '. info info info info info info info info info info .'
      '. text text text text text text text text text text .'
      '. details details details details details details details details details details .'
      'footer footer footer footer footer footer footer footer footer footer footer footer';
  }
`;

const container__text = css`
  grid-area: sub;
  text-align: center;
  color: #2e2e38;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  @media (max-width: 428px) {
    font-size: 24px;
  }
`;

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

const bold__text = css`
  grid-area: text;
  color: #2e2e38;
  font-family: 'Aeonik';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  @media (max-width: 428px) {
    font-size: 24px;
  }
`;

const review__text = css`
  grid-area: text;
  color: #2e2e38;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  @media (max-width: 428px) {
    font-size: 24px;
  }
`;

export default {
  container,
  container__text,
  text,
  bold__text,
  review__text,
};
