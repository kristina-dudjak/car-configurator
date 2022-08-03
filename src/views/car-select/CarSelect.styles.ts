import { css } from '@emotion/react';

const container = css`
  display: grid;
  grid-template: 1fr 2fr / repeat(12, 1fr);
  column-gap: 2%;
  height: 100%;
  grid-template-areas:
    '. text text text . . . . . . . .'
    '. cars cars cars cars cars cars cars cars cars cars cars';
  @media (max-width: 428px) {
    grid-template-areas:
      '. text text text text text text text . . . .'
      '. cars cars cars cars cars cars cars cars cars cars cars';
  }
`;

const container__text = css`
  grid-area: text;
  align-self: center;
`;

const container__title = css`
  grid-area: title;
  align-self: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: #2e2e38;
`;

const container__description = css`
  grid-area: description;
  color: #73738c;
  font-size: 14px;
  line-height: 20px;
`;

const container__cars = css`
  grid-area: cars;
  align-self: start;
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
`;

export default {
  container,
  container__text,
  container__title,
  container__description,
  container__cars,
};
