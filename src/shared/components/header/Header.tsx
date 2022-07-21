/** @jsxImportSource @emotion/react */
import styles from './Header.styles';
import { logo, menu } from 'assets';

export const Header: React.FC = () => {
  return (
    <div css={styles.container}>
      <img css={styles.logo} src={logo} />
      <img css={styles.menu} src={menu} />
    </div>
  );
};
