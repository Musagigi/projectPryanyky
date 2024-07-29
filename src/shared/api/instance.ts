import axios from 'axios';
import { AxiosPromise } from 'axios';

const instance = axios.create({
  baseURL: 'https://test.v5.pryaniky.com',
});

type TApiRequestConfig = {
  method: string;
  endpoint: string;
  data?: any;
  headers?: any;
};

export const apiRequest = async <T>({
  method,
  endpoint,
  data,
  headers,
}: TApiRequestConfig): AxiosPromise<T> => {
  return await instance.request({
    method,
    url: endpoint,
    data,
    headers,
  });
};
