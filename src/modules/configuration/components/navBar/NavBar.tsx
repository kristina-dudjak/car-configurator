/** @jsxImportSource @emotion/react */
import { ArrowLeft } from 'assets';
import { carAtoms, configurationSelector, useSaved } from 'modules';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styles from './NavBar.styles';

export const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const { name, year } = useRecoilValue(carAtoms.car);
  const { deleteSaved } = useSaved();
  const saved = useRecoilValue(configurationSelector.configuration);

  function deleteConf() {
    deleteSaved(saved);
    navigate('/configuration');
  }

  return (
    <nav css={styles.container__nav}>
      <div css={styles.container__nav__item}>
        <ArrowLeft
          css={styles.arrow__back}
          onClick={() => navigate('/configuration')}
        />
        <p css={styles.year}>{year}</p>
        <p css={styles.car}>{name}</p>
      </div>
      <div css={styles.container__nav__links}>
        <p css={styles.edit__link} onClick={() => navigate('exterior')}>
          Edit configuration
        </p>
        <p css={styles.delete__link} onClick={deleteConf}>
          Delete
        </p>
      </div>
    </nav>
  );
};
