import httpClient from '../infrastructure/http-client';

const httpClientMeter = httpClient('metrics');

export const getMeters = async () => {
  const result = await httpClientMeter.get<any>({ action: '' });
  console.log(result);
  return result;
};
