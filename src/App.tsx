import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Layout } from 'shared';
import {
  CarSelect,
  Configuration,
  ErrorView,
  Exterior,
  Home,
  Interior,
  Login,
  Register,
  Summary,
} from 'views';
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
          path="configuration"
          element={uid !== '' ? <Outlet /> : <Login />}
        >
          <Route index element={<CarSelect />} />
          <Route path=":carName">
            <Route index element={<Configuration />} />
            <Route path="exterior" element={<Exterior />} />
            <Route path="interior" element={<Interior />} />
            <Route path="summary" element={<Summary />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorView />} />
      </Route>
    </Routes>
  );
}
