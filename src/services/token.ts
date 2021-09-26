import httpClient from '../infrastructure/http-client';

const httpClientToken = httpClient('/token');

export const saveToken = async (token: string) => {
  const response = await httpClientToken.post({
    action: '',
    body: { token },
  });
  return response.data;
};
