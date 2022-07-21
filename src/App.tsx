import { Route, Routes } from 'react-router-dom';
import { Layout } from 'shared';
import { Home } from 'views';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
