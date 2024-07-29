import * as yup from 'yup';

export const registrationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Поле обязательно к заполнению')
    .matches(/^user\d+$/, 'Неверный формат логина'),
  password: yup
    .string()
    .min(8, 'Пароль должен содержать минимум 8 символов')
    .required('Поле обязательно к заполнению'),
});
