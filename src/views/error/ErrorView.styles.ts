import { css } from '@emotion/react';

const container = css`
  display: grid;
  grid-template: 1fr 1fr / repeat(12, 1fr);
  column-gap: 2%;
  height: 100%;
  grid-template-areas:
    '. . . . text text text text . . . .'
    '. . . . button button button button . . . .';
`;

const container__text = css`
  grid-area: text;
  align-self: center;
  justify-self: center;
`;

const title = css`
  text-align: center;
  font-size: 40px;
`;

const description = css`
  font-size: 20px;
`;

const button = css`
  grid-area: button;
  align-self: start;
  justify-self: center;
  background-color: #1e1ed2;
  color: #f1f1f4;
  border-color: #1e1ed2;
  border: 0;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  padding: 12px 20px;
  &:hover {
    opacity: 0.7;
  }
`;

export default {
  container,
  container__text,
  title,
  description,
  button,
};
