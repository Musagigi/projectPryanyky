import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { useModalState } from 'shared/hooks/useModalState';

import { useAppDispatch } from 'app/store/hooks';
import { setToken } from 'app/store/slices/authTokenSlice';
import { loginApi } from 'shared/api/requests/auth';
import { registrationSchema } from '../lib/validation';
import { TFormField } from '../lib/types';
import { ERROR_MESSAGE_PASSWORD } from '../lib/constants';
import { PATH_TO_TABLE_DATA } from 'app/router/constans';

export const useLogin = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { isSubmitting },
  } = useForm<TFormField>({
    mode: 'onBlur',
    resolver: yupResolver(registrationSchema),
    defaultValues: { username: '', password: '' },
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isOpen, handleModalOpen, handleModalClose } = useModalState();

  const onSubmit: SubmitHandler<TFormField> = async (data) => {
    try {
      const response = await loginApi({ data });
      const { data: responseData } = response.data;

      if (responseData === null) {
        setError('password', {
          message: ERROR_MESSAGE_PASSWORD,
        });
      } else {
        dispatch(setToken(responseData.token));
        navigate(PATH_TO_TABLE_DATA.path, { replace: true });
      }
    } catch (error) {
      console.log(error);
      handleModalOpen();
    }
  };

  return {
    control,
    isSubmitting,
    isOpen,
    handleModalClose,
    handleSubmit,
    onSubmit: (data: TFormField) => onSubmit(data),
  };
};
