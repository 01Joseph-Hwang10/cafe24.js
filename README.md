# cafe24.js [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/01Joseph-Hwang10/cafe24.js/blob/master/.github/CONTRIBUTING.md)

`cafe24.js`는 [Cafe24]에서 제공하는 API를 JS/TS 프로젝트에서 type-safe하게 활용할 수 있도록 하기 위해 개발한 라이브러리의 모음입니다.

> [!IMPORTANT]
> `cafe24.js`는 **[Cafe24]의 공식적인 프로젝트가 아닙니다**.

## Packages

- [cafe24-types](./packages/cafe24-types/README.md): Cafe24 API에서 활용하는 데이터 타입 정의를 제공하는 패키지입니다. 
                                                     화면 코드(Display Code)나 필요 권한(Scope)이 포함되어 있습니다.
- [cafe24api-client](./packages/cafe24api-client/README.md): Cafe24 REST API HTTP 클라이언트입니다.
- [cafe24-webhook](./packages/cafe24-webhook/README.md): Cafe24 Webhook 이벤트 데이터의 타입 정의를 제공하는 패키지입니다.
- [cafe24-get-auth-code](./packages/cafe24-get-auth-code/README.md): Cafe24 OAuth 인증 코드를 받아오는 CLI 도구 및 라이브러리입니다.

## Contributing

기여와 제안은 언제나 환영합니다. [CONTRIBUTING.md](./.github/CONTRIBUTING.md)를 참고해주세요.

## License

[MIT](./LICENSE)

[Cafe24]: https://www.cafe24.com
