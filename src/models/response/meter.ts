export interface MeterResponse {
  id: string;
  sendDate: string;
  value: number;
}

export interface Meter {
  id: string;
  sendDate: Date;
  value: number;
}
