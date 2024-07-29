import axios, { AxiosPromise } from 'axios';

export const logoutApi = (): AxiosPromise => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      axios
        .post('/api/auth/logout')
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    }, 1000);
  });
};
