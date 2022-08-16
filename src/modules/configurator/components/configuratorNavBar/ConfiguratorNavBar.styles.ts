import { css } from '@emotion/react';
import { EditedItem } from 'shared';

function container__nav(editing: EditedItem) {
  return css({
    gridArea: 'nav',
    margin: editing !== EditedItem.None ? '0 -5% 0 0' : '0',
    backgroundColor: '#fcfcfd',
    color: '#2e2e38',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media(max-width: 900px)': {
      margin: 0,
    },
  });
}

const container__nav__left = css`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 16px;
  align-items: center;
  font-family: 'Optician Sans';
  font-size: 28px;
  line-height: 32px;
  letter-spacing: -2px;
`;

const back = css`
  padding: 0 0 0 44px;
  @media (max-width: 900px) {
    padding-left: 8px;
  }
`;

const year = css`
  color: #9d9daf;
`;

const car = css`
  text-transform: uppercase;
`;

function container__nav__right(displayed: EditedItem) {
  return css({
    display: displayed !== EditedItem.None ? 'none' : 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    '@media(max-width: 900px)': {
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
  });
}

const element = css`
  padding: 28px 40px;
  @media (max-width: 900px) {
    padding: 0;
  }
`;

const number = css`
  color: #9d9daf;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const link = css`
  color: #2e2e38;
  font-size: 16px;
  line-height: 24px;
  margin: 0 4px;
  text-decoration: none;
`;

export default {
  container__nav,
  container__nav__left,
  back,
  link,
  year,
  number,
  car,
  container__nav__right,
  element,
};
