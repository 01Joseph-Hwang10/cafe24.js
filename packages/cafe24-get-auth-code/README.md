# cafe24-get-auth-code

[![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/cafe24-get-auth-code)
[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/01Joseph-Hwang10/cafe24.js/tree/master/packages/cafe24-get-auth-code)

[cafe24 api의 auth code](https://developers.cafe24.com/docs/en/api/admin/#get-authentication-code)를
가져오는 기능을 제공합니다.

## Installation

```bash
npm install cafe24-get-auth-code puppeteer@24
```

## CLI Usage

```
Usage:
  cafe24-get-auth-code \
    --mall-id <mall-id> \
    --password <password> \
    --client-id <client-id> \
    --scope <scope> \
    [...options]

  Options:
    - [Required] `--mall-id`: cafe24 mall id (Environment variable: `CAFE24_MALL_ID`)
    - [Required] `--password`: cafe24 password (Environment variable: `CAFE24_PASSWORD`)
    - [Required] `--client-id`: cafe24 client id (from [cafe24 developer console](https://developers.cafe24.com/))
                                (Environment variable: `CAFE24_CLIENT_ID`)
    - [Required] `--scope`: comma seperated cafe24 api scopes (Environment variable: `CAFE24_SCOPE`)
    - [Optional] `--redirect-uri`: redirect uri (default: `https://cafe24.com`)
                                  (Environment variable: `CAFE24_AUTH_REDIRECT_URI`)
    - [Optional] `--state`: state (default: randomly generated)
                            (Environment variable: `CAFE24_AUTH_STATE`)
    - [Optional] `--debug`: Enable debug mode
    - [Optionap] `--env-file`: Load environment variables from a file. (default: `.env`)
```

## API Usage

```javascript
import { getAuthCode } from 'cafe24-get-auth-code';

const result = await getAuthCode({
  mallId: 'mall-id',
  password: 'password',
  clientId: 'client-id',
  scope: 'scope1,scope2',
  redirectUri: 'https://cafe24.com',
  state: 'state'
})

if (result.error) {
  console.error(result.error);
} else {
  const { code, state } = result;
  console.log(`Retrieved auth code: ${code}`);
  console.log(`State: ${state}`);
}
```

## License

[MIT](./LICENSE)

