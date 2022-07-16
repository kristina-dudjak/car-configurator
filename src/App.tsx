import { Route, Routes } from 'react-router-dom';
import { Layout } from 'shared';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
}
