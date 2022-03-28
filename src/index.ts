import 'dotenv/config';
import express from 'express';
import { expressToAxiosHeaders } from './expressToAxiosHeaders';
import { sigv4Post } from './sigv4Post';

const app = express();
const port = process.env.SIGV4PROXY_PORT;

app.use(express.text({ type: '*/*' }));

app.post('/', async (req, res) => {
  const response = await sigv4Post(
    null,
    req.body,
    expressToAxiosHeaders(req.rawHeaders)
  );

  Object.entries(response.headers).forEach((x) => res.append(x[0], x[1]));
  res.status(response.status);
  res.send(response.data);
});

app.post('/test', async (req, res) => {
  res.append('test', '123');
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
