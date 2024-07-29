import { AxiosRequestConfig } from 'axios';
import { apiRequest } from 'shared/api/instance';

type TLoginResponse = {
  data: {
    token: string;
  };
};

export const loginApi = <T>({ data }: AxiosRequestConfig<T>) => {
  return apiRequest<TLoginResponse>({
    method: 'POST',
    endpoint: '/ru/data/v3/testmethods/docs/login',
    data,
  });
};
