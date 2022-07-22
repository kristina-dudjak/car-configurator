import { css } from '@emotion/react';

const container = css`
  position: sticky;
  top: 0;
  z-index: 2;
`;

const container__header = css`
  background-color: #2e2e38;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
`;

function container__menu(visible: boolean) {
  return css({
    position: 'absolute',
    right: '0',
    display: visible ? 'flex' : 'none',
    flexDirection: 'column',
    width: '218px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.06)',
  });
}

const container__menu__text = css`
  padding: 16px 24px;
  font-size: 14px;
  color: #2e2e38;
  border: 1px solid #f1f1f4;
  cursor: pointer;
  &:hover {
    color: #3f3fe4;
  }
`;

export default {
  container,
  container__header,
  container__menu,
  container__menu__text,
};
