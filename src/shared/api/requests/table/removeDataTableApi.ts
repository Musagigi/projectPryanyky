import { apiRequest } from 'shared/api/instance';
import { getAuthToken } from 'shared/lib/utils/getAuthToken';

type TTableDataResponse = {
  id: string;
  status: number;
};

export const removeDataTableApi = (id: string) => {
  return apiRequest<TTableDataResponse>({
    method: 'POST',
    endpoint: `/ru/data/v3/testmethods/docs/userdocs/delete/${id}`,
    headers: { 'x-auth': getAuthToken() },
  });
};
