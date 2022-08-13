import { css } from '@emotion/react';

const container = css`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-content: stretch;
  column-gap: 2%;
  height: 100%;
  grid-template-areas:
    '. shared shared shared shared shared shared shared shared shared shared .'
    '. cars cars cars cars cars cars cars cars cars cars .';
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

export default {
  container,
  container__shared,
  container__shared__text,
  container__shared__button,
};
