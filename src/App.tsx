import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'shared';
import { CarSelect, Home, Login, Register } from 'views';
import { useRecoilValue } from 'recoil';
import { authAtoms } from 'modules';

export function App() {
  const uid = useRecoilValue(authAtoms.userUid);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={uid !== '' ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/register"
          element={uid !== '' ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/login"
          element={uid !== '' ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/car-select"
          element={uid !== '' ? <CarSelect /> : <Login />}
        />
        <Route path="*" element={<p>There's nothing here!</p>} />
      </Route>
    </Routes>
  );
}
