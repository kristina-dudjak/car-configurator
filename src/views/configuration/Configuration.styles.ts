import { css } from '@emotion/react';

const container = css`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2%;
  height: 100%;
  grid-template-areas:
    'nav nav nav nav nav nav nav nav nav nav nav nav'
    '. slider slider slider slider slider slider slider slider slider slider .'
    '. info info info info info info info info info info .'
    '. text text text . details details details details details details .';
  @media (max-width: 428px) {
    grid-template-areas:
      'nav nav nav nav nav nav nav nav nav nav nav nav'
      '. slider slider slider slider slider slider slider slider slider slider .'
      '. info info info info info info info info info info .'
      '. text text text text text text text text text text .'
      '. details details details details details details details details details details .';
  }
`;

export default {
  container,
};
