import { css } from '@emotion/react';

const container = css`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-content: stretch;
  column-gap: 2%;
  height: 100%;
  grid-template-areas:
    '. shared shared shared shared shared shared shared shared shared shared .'
    '. . . empty empty empty empty empty empty . . .';
`;

const container__shared = css`
  align-self: center;
  grid-area: shared;
  display: flex;
  justify-content: space-between;
  @media (max-width: 428px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

const container__shared__text = css`
  font-size: 24px;
  color: #2e2e38;
  font-weight: 400;
  text-align: center;
`;

const container__shared__button = css`
  background-color: #1e1ed2;
  color: #f1f1f4;
  border-color: #1e1ed2;
  border: 0;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  padding: 12px 20px;
  &:hover {
    opacity: 0.7;
  }
`;

const container__empty = css`
  grid-area: empty;
  place-self: start center;
`;

const container__empty__image = css`
  opacity: 0.1;
  width: 100%;
`;

const container__empty__text = css`
  color: #73738c;
  font-size: 20px;
  line-height: 28px;
  @media (max-width: 428px) {
    font-size: 16px;
  }
`;

const container__empty__link = css`
  color: #1e1ed2;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    opacity: 0.5;
  }
`;

export default {
  container,
  container__shared,
  container__shared__text,
  container__shared__button,
  container__empty,
  container__empty__image,
  container__empty__text,
  container__empty__link,
};
