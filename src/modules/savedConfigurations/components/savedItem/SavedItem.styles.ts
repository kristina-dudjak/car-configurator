import { css } from '@emotion/react';
import 'react-toastify/dist/ReactToastify.css';

const container = css`
  background-color: #fcfcfd;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 428px) {
    flex-direction: column;
  }
`;

const container__info = css`
  display: flex;
  @media (max-width: 428px) {
    flex-direction: column;
  }
`;

const image = css`
  width: 50%;
  @media (max-width: 428px) {
    width: 100%;
  }
`;

const container__text = css`
  margin: 30px 0;
  padding: 0 0 0 28px;
  border-left: 1px solid #c7c7d1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 428px) {
    margin-bottom: 0;
  }
`;

const year = css`
  color: #73738c;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 11px;
  line-height: 16px;
  margin: 0;
`;

const name = css`
  color: #1e1ed2;
  letter-spacing: -2px;
  font-size: 36px;
  line-height: 32px;
  margin: 0;
  text-transform: uppercase;
  font-family: 'Optician Sans';
`;

const color = css`
  color: #505062;
  margin: 8px 0 32px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 11px;
  line-height: 16px;
`;

const time = css`
  color: #9d9daf;
  font-size: 12px;
  line-height: 16px;
  margin: 0;
`;

const container__more = css`
  margin: 30px 26px;
  display: flex;
  flex-direction: column;
`;

const more = css`
  align-self: flex-end;
  color: #9898f0;
`;

function container__menu(visible: boolean) {
  return css({
    display: visible ? 'flex' : 'none',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.06)',
  });
}

const container__menu__edit = css`
  padding: 16px 24px;
  font-size: 14px;
  border: 1px solid #f1f1f4;
  cursor: pointer;
  color: #3f3fe4;
`;

const container__menu__delete = css`
  padding: 16px 24px;
  font-size: 14px;
  border: 1px solid #f1f1f4;
  cursor: pointer;
  color: #d2341e;
`;

export default {
  container,
  container__info,
  image,
  container__text,
  year,
  name,
  color,
  time,
  container__more,
  more,
  container__menu,
  container__menu__edit,
  container__menu__delete,
};
