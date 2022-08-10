/** @jsxImportSource @emotion/react */
import { ArrowLeft } from 'assets';
import { carAtoms } from 'modules';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styles from './NavBar.styles';

export const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const car = useRecoilValue(carAtoms.car);

  return (
    <nav css={styles.container__nav}>
      <div css={styles.container__nav__item}>
        <ArrowLeft
          css={styles.arrow__back}
          onClick={() => navigate('/configuration')}
        />
        <p css={styles.year}>{car.year}</p>
        <p css={styles.car}>{car.name}</p>
      </div>
      <div css={styles.container__nav__links}>
        <a css={styles.edit__link}>Edit configuration</a>
        <a css={styles.delete__link}>Delete</a>
      </div>
    </nav>
  );
};
