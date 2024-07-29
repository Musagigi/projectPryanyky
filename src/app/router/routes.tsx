import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import { App } from '../App';
import { LoginPage } from 'pages/LoginPage';
import { ProtectedRoute } from './ProtectedRoute';

import { PATH_NOT_AUTH_USER, PATH_TO_TABLE_DATA } from './constans';

const Table = lazy(() => import('pages/Table'));

const suspense = (page: React.ReactNode, fallback = <CircularProgress />) => (
  <ProtectedRoute>
    <Suspense fallback={fallback}>{page}</Suspense>
  </ProtectedRoute>
);

export const routes = createBrowserRouter([
  {
    path: PATH_NOT_AUTH_USER,
    element: <App />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: PATH_TO_TABLE_DATA.path,
        element: suspense(<Table />),
      },
    ],
  },
]);
