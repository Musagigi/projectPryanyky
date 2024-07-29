import { AppBar, Box, Toolbar, Container } from '@mui/material';

import { ButtonRouter } from 'shared/ui/buttons/ButtonRouter';

import { authTokenSelector } from 'app/store/selectors/authTokenSelector';
import { PATH_TO_LOGIN, PATH_TO_TABLE_DATA } from 'app/router/constans';
import { headerMenu, headerMenuUser } from './styles';
import { useAppSelector } from 'app/store/hooks';

export const Header = () => {
  const token = useAppSelector(authTokenSelector);

  return (
    <AppBar position="static">
      <Container maxWidth="desktop">
        <Toolbar
          disableGutters
          sx={headerMenu}
        >
          <Box sx={headerMenuUser}>
            {token ? (
              <ButtonRouter path={PATH_TO_TABLE_DATA.path}>
                {PATH_TO_TABLE_DATA.name}
              </ButtonRouter>
            ) : (
              <ButtonRouter path={PATH_TO_LOGIN.path}>
                {PATH_TO_LOGIN.name}
              </ButtonRouter>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
