import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'app/store/hooks';
import { removeToken } from 'app/store/slices/authTokenSlice';

import { PATH_NOT_AUTH_USER } from 'app/router/constans';
import { TOKEN } from 'shared/lib/constans/request';

export const useLogout = (token: string = TOKEN) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(removeToken(token));
    navigate(PATH_NOT_AUTH_USER, { replace: true });
  };

  return logout;
};
