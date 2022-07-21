import { css } from '@emotion/react';

const container = css`
  background-color: #f1f1f4;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const wrapper = css`
  flex: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 10px;
  @media (max-width: 480px) {
    max-width: 270px;
  }
  @media (min-width: 481px) {
    max-width: 400px;
  }
  @media (min-width: 769px) {
    max-width: 600px;
  }
  @media (min-width: 1024px) {
    min-width: 900px;
  }
  @media (min-width: 2000px) {
    min-width: 1600px;
  }
`;

export default { container, wrapper };
