import { apiRequest } from 'shared/api/instance';
import { getAuthToken } from 'shared/lib/utils/getAuthToken';

type TTableDataResponse<T> = {
  id: string;
  data: T;
  status: number;
};

export const editDataTableApi = <T>(id: string, data: T) => {
  return apiRequest<TTableDataResponse<T>>({
    method: 'POST',
    endpoint: `/ru/data/v3/testmethods/docs/userdocs/set/${id}`,
    headers: { 'x-auth': getAuthToken() },
    data,
  });
};
