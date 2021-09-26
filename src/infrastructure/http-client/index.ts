import HttpClient from './http-client';
import instance from './instance';

const http = (resource: string, baseUrl?: string) =>
  new HttpClient(resource, baseUrl, instance);

export default http;
