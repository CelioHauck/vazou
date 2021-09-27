import httpClient from '../infrastructure/http-client';
import { Meter, MeterResponse } from '../models/response/meter';

const httpClientMeter = httpClient('metrics');

const realTime = (date: string): Date => {
  const realDate = new Date(date);
  realDate.setHours(realDate.getHours() + 3);
  return realDate;
};

export const getMeters = async (): Promise<Meter | undefined> => {
  const response = await httpClientMeter.get<MeterResponse[]>({ action: '' });
  const result = response.data.map<Meter>((meter) => {
    const date = realTime(meter.sendDate);
    return { ...meter, sendDate: date };
  });
  const last = result.pop();
  return last;
};

export const getLastMeter = async (): Promise<Meter | undefined> => {
  const response = await httpClientMeter.get<MeterResponse>({ action: 'last' });
  if (response.data) {
    const date = realTime(response.data.sendDate);
    return { ...response.data, sendDate: date };
  }
};
