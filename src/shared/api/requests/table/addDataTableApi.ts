import { AxiosRequestConfig } from 'axios';

import { apiRequest } from 'shared/api/instance';
import { getAuthToken } from 'shared/lib/utils/getAuthToken';

type TTableDataResponse<T> = {
  data: T;
  status: number;
};

export const addDataTableApi = <T>({ data }: AxiosRequestConfig<T>) => {
  return apiRequest<TTableDataResponse<T>>({
    method: 'POST',
    endpoint: '/ru/data/v3/testmethods/docs/userdocs/create',
    headers: { 'x-auth': getAuthToken() },
    data,
  });
};
