import { Route, Routes } from 'react-router-dom';

import CharacterInfo from '@/pages/CharacterInfo/CharacterInfo';

import Main from '../pages/Main/Main';

const AppRoutes = () => {
  const navigationRoutes = [
    { path: '/', element: <Main /> },
    { path: '/info', element: <CharacterInfo /> },
    { path: '*', element: <Main /> }
  ];
  return (
    <Routes>
      {navigationRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
