/** @jsxImportSource @emotion/react */
import styles from './Header.styles';
import { logo, menu } from 'assets';

export const Header: React.FC = () => {
  return (
    <div css={styles.header}>
      <img css={styles.logo} src={logo} />
      <div css={styles.container__menu}>
        <button css={styles.button}>Configure a car</button>
        <img css={styles.menu} src={menu} />
      </div>
    </div>
  );
};
