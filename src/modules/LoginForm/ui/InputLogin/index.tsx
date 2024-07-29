import { TextField } from '@mui/material';
import { useController } from 'react-hook-form';

import { TInputLogin } from 'modules/LoginForm/lib/types';
import { regFormField } from './styles';

export const InputLogin = ({
  control,
  name,
  label,
  type,
  autoFocus,
  required,
}: TInputLogin) => {
  const {
    field,
    formState: { errors },
  } = useController({ name, control });

  return (
    <TextField
      {...field}
      fullWidth
      variant="filled"
      label={label}
      type={type}
      required={required}
      autoFocus={autoFocus}
      error={!!errors[name]}
      helperText={errors[name]?.message}
      sx={regFormField}
    />
  );
};
