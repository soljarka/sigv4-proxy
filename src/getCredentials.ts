import { Credentials } from 'aws4-axios';
import { SharedIniFileCredentials } from 'aws-sdk';

export const getCredentials = (): Credentials => {
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
  const sessionToken = process.env.AWS_SESSION_TOKEN;

  if (accessKeyId && secretAccessKey && sessionToken) {
    return {
      accessKeyId,
      secretAccessKey,
      sessionToken
    };
  }
  return new SharedIniFileCredentials();
};
