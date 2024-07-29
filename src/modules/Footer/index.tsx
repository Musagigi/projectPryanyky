import { Box, Container } from '@mui/material';
import { boxFooter } from './styles';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={boxFooter}
    >
      <Container
        maxWidth="desktop"
        sx={{ height: '50px' }}
      ></Container>
    </Box>
  );
};
