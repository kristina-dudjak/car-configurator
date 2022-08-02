import { css } from '@emotion/react';

import pic from '../../assets/black.png';

const wrapper = css`
height: 100%;
background-size: cover;
background-image: url(${pic})};
`;

const container__redirect = css`
  text-align: center;
  color: white;
`;

const redirect__link = css`
  cursor: pointer;
  color: #1e1ed2;
  font-weight: 700;
  margin: 0 0 0 8px;
  &:hover {
    opacity: 0.5;
  }
`;

export default { wrapper, container__redirect, redirect__link };
