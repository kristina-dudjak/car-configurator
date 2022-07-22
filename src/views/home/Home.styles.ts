import { css } from '@emotion/react';

const container = css`
  max-width: 1128px;
  margin: 0 auto;
  padding: 76px 40px;
  gap: 48px;
  display: flex;
  flex-direction: column;
`;

const container__shared = css`
  display: flex;
  justify-content: space-between;
  @media (max-width: 428px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

const shared__text = css`
  font-size: 24px;
  color: #2e2e38;
  @media (max-width: 428px) {
    text-align: center;
  }
`;

const shared__button = css`
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
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const image = css`
  opacity: 0.1;
  width: 100%;
`;

const empty_text = css`
  color: #73738c;
  font-size: 20px;
  text-align: center;
  line-height: 28px;
  max-width: 50%;
  @media (max-width: 428px) {
    font-size: 16px;
  }
`;

const link = css`
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
  shared__text,
  shared__button,
  container__empty,
  image,
  empty_text,
  link,
};
