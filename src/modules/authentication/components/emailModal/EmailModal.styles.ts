import { css } from '@emotion/react';

const wrapper = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: gray;
  opacity: 0.96;
`;

const container = css`
  padding: 20px;
`;

const input__group = css`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
`;

const input__label = css`
  color: black;
  font-weight: 700;
`;

const container__submit = css`
  background-color: #1e1ed2;
  color: #f1f1f4;
  &:hover {
    opacity: 0.5;
  }
`;

const container__error = css`
  font-weight: 700;
  text-align: center;
  color: red;
`;

const button = css`
  margin: 20px 0 0;
`;

export default {
  wrapper,
  container,
  input__group,
  input__label,
  container__submit,
  container__error,
  button,
};
