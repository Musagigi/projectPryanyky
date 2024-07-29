import { LoginForm } from 'modules/LoginForm';
import { useEffect } from 'react';

import { useLogout } from 'shared/hooks/useLogout';

export const LoginPage = () => {
  const logout = useLogout();

  useEffect(() => {
    logout();
  }, []);

  return <LoginForm />;
};
