/** @jsxImportSource @emotion/react */
import { Logo, Menu } from 'assets';
import { authAtoms, useAuth } from 'modules';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styles from './Header.styles';

export const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const auth = useAuth();
  const uid = useRecoilValue(authAtoms.userUid);
  const navigate = useNavigate();
  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  function logout() {
    auth.signout();
  }

  return (
    <header css={styles.container}>
      <div css={styles.container__header}>
        <Logo />
        {uid != '' && <Menu onClick={toggleVisibility} />}
      </div>
      {uid != '' && (
        <div css={styles.container__menu(isVisible)}>
          <a onClick={() => navigate('/')} css={styles.container__menu__text}>
            My saved configurations
          </a>
          <a onClick={logout} css={styles.container__menu__text}>
            Logout
          </a>
        </div>
      )}
    </header>
  );
};
