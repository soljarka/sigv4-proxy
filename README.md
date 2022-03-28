Simple reverse proxy for AWS sigv4 termination.

### Usage:
```
npm run i
npm start
```

Or with Docker:
```
docker-compose build
docker-compose up
```

### Configuration
Configure using environment variables or .env file:
|Variable|Description|
|---|---|
|SIGV4PROXY_PORT|Proxy will listen on this port|
|SIGV4PROXY_SERVICE|AWS service name, for example `execute-api`|
|SIGV4PROXY_ENDPOINT|Target URL|
|SIGV4PROXY_REGION|AWS region of the target|
|AWS_ACCESS_KEY_ID|AWS access key ID|
|AWS_SECRET_ACCESS_KEY|AWS access key|
|AWS_SESSION_TOKEN|AWS session token|

When executed without docker, proxy will pull shared credentials from `.aws` if environment variables are not defined.