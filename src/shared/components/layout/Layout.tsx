/** @jsxImportSource @emotion/react */
import { Header } from '../header';
import { wrapper } from './Layout.styles';

export const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <main css={wrapper}></main>
    </div>
  );
};
