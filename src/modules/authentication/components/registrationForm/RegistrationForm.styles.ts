import { css } from '@emotion/react';

const container = css`
  display: grid;
  height: 90%;
  grid-template: repeat(6, 1fr) / repeat(12, 1fr);
  gap: 2%;
  justify-items: center;
  grid-template-areas:
    '. . . title title title title title title . . .'
    '. . . inputs inputs inputs inputs inputs inputs . . .'
    '. . . check check check check check check . . .'
    '. . . . submit submit submit submit . . . .'
    '. . . . google google google google . . . .'
    '. . . error error error error error error . . .';
`;

const container__title = css`
  grid-area: title;
  color: #1e1ed2;
  align-self: center;
`;

const container__inputs = css`
  grid-area: inputs;
`;

const input__group = css`
  grid-area: input;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 8px 0;
`;

const input__label = css`
  color: white;
`;

const input = css`
  width: 100%;
  border: 2px solid #9d9daf;
`;

const icon__container = css`
  position: relative;
`;

const icon = css`
  position: absolute;
  right: 0;
`;

const container__google = css`
  grid-area: google;
  border-radius: 16px;
  border-color: #1e1ed2;
  width: 100%;
  align-self: center;
`;

const checkbox__container = css`
  grid-area: check;
  display: flex;
  gap: 8px;
  align-self: center;
`;

const checkbox = css`
  border: 2px solid #9d9daf;
  border-radius: 4px;
  width: 20px;
  height: 20px;
`;

const container__submit = css`
  grid-area: submit;
  background-color: #1e1ed2;
  color: #f1f1f4;
  align-self: center;
  width: 100%;
  padding: 2% 0;
  &:hover {
    opacity: 0.5;
  }
`;

const container__error = css`
  grid-area: error;
  align-self: center;
  font-weight: 700;
  text-align: center;
  color: red;
`;

export default {
  container,
  container__title,
  container__inputs,
  input__group,
  input__label,
  input,
  icon__container,
  icon,
  container__google,
  checkbox__container,
  checkbox,
  container__submit,
  container__error,
};
