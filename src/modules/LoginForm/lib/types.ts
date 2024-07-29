import { Control } from 'react-hook-form';

export type TFormField = {
  username: string;
  password: string;
};

export type TInputLogin = {
  control: Control<TFormField>;
  name: keyof TFormField;
  label?: string;
  type?: string;
  autoFocus?: boolean;
  required?: boolean;
};
