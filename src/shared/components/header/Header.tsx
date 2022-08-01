/** @jsxImportSource @emotion/react */
import { Logo, Menu } from 'assets';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useAuth } from 'shared/hooks';
import { authAtoms } from 'shared/state';
import styles from './Header.styles';

export const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const auth = useAuth();
  const uid = useRecoilValue(authAtoms.userUid);
  function toggleVisibility() {
    setVisible(!visible);
  }

  function logout() {
    auth.signout();
  }

  return (
    <div css={styles.container}>
      <header css={styles.container__header}>
        <Logo />
        {uid != '' && <Menu onClick={toggleVisibility} />}
      </header>
      {uid != '' && (
        <div css={styles.container__menu(visible)}>
          <a css={styles.container__menu__text}>My saved configurations</a>
          <a onClick={logout} css={styles.container__menu__text}>
            Logout
          </a>
        </div>
      )}
    </div>
  );
};
