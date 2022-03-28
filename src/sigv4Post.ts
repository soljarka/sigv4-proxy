import axios, { AxiosRequestHeaders } from 'axios';
import { aws4Interceptor } from 'aws4-axios';
import { getCredentials } from './getCredentials';
import path from 'path';

export const sigv4Post = async (
  query: string | null,
  data?: string,
  headers?: AxiosRequestHeaders
) => {
  const client = axios.create();

  const interceptor = aws4Interceptor(
    {
      region: process.env.SIGV4PROXY_REGION,
      service: process.env.SIGV4PROXY_SERVICE
    },
    getCredentials()
  );

  client.interceptors.request.use(interceptor);

  const url = process.env.SIGV4PROXY_ENDPOINT;

  if (!url) throw new Error('URL is not defined.');
  const response = await client.post(
    query ? path.join(url, query) : url,
    data,
    {
      headers
    }
  );

  return response;
};
