import { Box, Paper, Typography } from '@mui/material';

import { InputLogin } from './ui/InputLogin';
import { SubmitFormButton } from 'shared/ui/buttons/SubmitFormButton';
import { NotifyModal } from 'shared/ui/modals/NotifyModal';

import { useLogin } from './hooks/useLogin';
import { LOGIN } from './lib/constants';
import { loginForm, loginFormTitle, loginFormWrapper } from './styles';
import { LoadingModal } from 'shared/ui/modals/LoadingModal';

export const LoginForm = () => {
  const {
    control,
    isSubmitting,
    isOpen,
    handleModalClose,
    handleSubmit,
    onSubmit,
  } = useLogin();

  return (
    <Paper
      variant="outlined"
      sx={loginFormWrapper}
    >
      {isSubmitting && <LoadingModal />}
      <NotifyModal
        open={isOpen}
        handleClose={handleModalClose}
      />
      <Typography
        component="h2"
        variant="h5"
        sx={loginFormTitle}
      >
        {LOGIN}
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={loginForm}
      >
        <InputLogin
          control={control}
          name="username"
          label="Логин"
          required
          autoFocus
        />
        <InputLogin
          control={control}
          name="password"
          label="Пароль"
          type="password"
          required
        />
        <SubmitFormButton />
      </Box>
    </Paper>
  );
};
