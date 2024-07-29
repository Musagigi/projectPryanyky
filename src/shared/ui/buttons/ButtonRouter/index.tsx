import { Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { routerBtn } from './styles';

type TRouterButton = {
  path: string;
  children: string;
};

export const ButtonRouter = ({ path, children }: TRouterButton) => {
  return (
    <Link
      to={path}
      component={NavLink}
      sx={routerBtn}
    >
      {children}
    </Link>
  );
};
