import { AxiosRequestHeaders } from 'axios';

export const expressToAxiosHeaders = (
  rawHeaders: string[]
): AxiosRequestHeaders => {
  const axiosHeaders: AxiosRequestHeaders = {};
  for (let i = 0; i < rawHeaders.length; i = i + 2) {
    axiosHeaders[rawHeaders[i]] = rawHeaders[i + 1];
  }
  return axiosHeaders;
};
