/** @jsxImportSource @emotion/react */
import { Logo, Menu } from 'assets';
import { useState } from 'react';
import styles from './Header.styles';

export const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);
  function toggleVisibility() {
    setVisible(!visible);
  }
  return (
    <div css={styles.container}>
      <header css={styles.container__header}>
        <Logo />
        <Menu onClick={toggleVisibility} />
      </header>
      <div css={styles.container__menu(visible)}>
        <a css={styles.container__menu__text}>My saved configurations</a>
        <a css={styles.container__menu__text}>Logout</a>
      </div>
    </div>
  );
};
