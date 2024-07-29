import { apiRequest } from 'shared/api/instance';
import { getAuthToken } from 'shared/lib/utils/getAuthToken';

type TTableDataResponse<T> = {
  data: Array<T>;
};

export const getDataTableApi = <T>() => {
  return apiRequest<TTableDataResponse<T>>({
    method: 'GET',
    endpoint: '/ru/data/v3/testmethods/docs/userdocs/get',
    headers: { 'x-auth': getAuthToken() },
  });
};
