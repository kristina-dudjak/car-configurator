/** @jsxImportSource @emotion/react */
import { Logo, Menu } from 'assets';
import styles from './Header.styles';

export const Header: React.FC = () => {
  return (
    <header css={styles.container}>
      <Logo />
      <Menu />
    </header>
  );
};
