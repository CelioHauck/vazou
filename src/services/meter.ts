import httpClient from '../infrastructure/http-client';
import { MeterResponse } from '../models/response/meter';

const httpClientMeter = httpClient('metrics');

export const getMeters = async (): Promise<MeterResponse | undefined> => {
  const response = await httpClientMeter.get<MeterResponse[]>({ action: '' });
  const result = response.data.map<MeterResponse>((meters) => {
    return { ...meters };
  });
  const last = result.pop();
  return last;
};
