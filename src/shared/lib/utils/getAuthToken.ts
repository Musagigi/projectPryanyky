import { TOKEN } from '../constans/request';

export const getAuthToken = () => {
  const token = localStorage.getItem(TOKEN);

  return token ? JSON.parse(token) : null;
};
