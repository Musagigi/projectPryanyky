import { Backdrop, CircularProgress } from '@mui/material';

export const LoadingModal = () => {
  return (
    <Backdrop
      open
      sx={{ zIndex: 10 }}
    >
      <CircularProgress
        size={40}
        color="primary"
      />
    </Backdrop>
  );
};
