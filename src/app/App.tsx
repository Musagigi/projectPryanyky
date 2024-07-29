import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import { Header } from 'modules/Header';
import { Footer } from 'modules/Footer';

import { wrapperPage, wrapperMainContainer } from './styles';

export const App = () => {
  return (
    <Box sx={wrapperPage}>
      <Header />
      <Container
        component="main"
        sx={wrapperMainContainer}
      >
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};
