/** @jsxImportSource @emotion/react */
import { Outlet } from 'react-router-dom';
import { Header } from '../header';
import styles from './Layout.styles';

export const Layout: React.FC = () => {
  return (
    <div css={styles.container}>
      <Header />
      <Outlet />
    </div>
  );
};
