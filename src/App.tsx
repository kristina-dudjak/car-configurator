import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout, authAtoms } from 'shared';
import { Home, Login, Register } from 'views';
import { useRecoilValue } from 'recoil';

export function App() {
  const uid = useRecoilValue(authAtoms.userUid);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={uid != '' ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/register"
          element={uid != '' ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/login"
          element={uid != '' ? <Navigate to="/" /> : <Login />}
        />
      </Route>
    </Routes>
  );
}
