import { Navigate } from 'react-router-dom';

import { useAppSelector } from 'app/store/hooks';
import { authTokenSelector } from 'app/store/selectors/authTokenSelector';
import { PATH_NOT_AUTH_USER } from './constans';

type TProtectedRoute = {
  children: React.ReactNode;
  redirectPath?: string;
};

export const ProtectedRoute = ({
  children,
  redirectPath = PATH_NOT_AUTH_USER,
}: TProtectedRoute) => {
  const token = useAppSelector(authTokenSelector);

  return token ? (
    children
  ) : (
    <Navigate
      to={redirectPath}
      replace
    />
  );
};
