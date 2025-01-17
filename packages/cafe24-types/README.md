# Cafe24 types

[![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/cafe24-types)
[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/01Joseph-Hwang10/cafe24.js/tree/master/packages/cafe24-types)

Cafe24 API에서 활용하는 데이터 타입 정의를 제공하는 패키지입니다. 
화면 코드(Display Code)나 필요 권한(Scope)이 포함되어 있습니다.

## Installation

```bash
npm install cafe24-types
```

## API

- `type Cafe24Boolean`: Cafe24 API에서 사용하는 boolean 타입입니다. `T` 또는 `F`로 표현됩니다.
- `type Cafe24Enum`: Cafe24 API에서 사용하는 enum 타입입니다. 길이가 1인, 알파벳 대문자의 문자열로 표현됩니다.
- `type Cafe24Date`: Cafe24 API에서 사용하는 날짜 타입입니다. `YYYY-MM-DD` 형식으로 표현됩니다.
- `type Cafe24DateTime`: Cafe24 API에서 사용하는 날짜와 시간 타입입니다. `YYYY-MM-DD HH:mm:ss` 형식으로 표현됩니다.
- `enum Cafe24DisplayCode`: Cafe24 API에서 사용하는 화면 코드입니다.
  - `function isCafe24DisplayCode`: 주어진 문자열이 Cafe24 화면 코드인지 확인합니다.
- `enum Cafe24Scope`: Cafe24 API에서 사용하는 필요 권한입니다.
  - `function isCafe24Scope`: 주어진 문자열이 Cafe24 필요 권한인지 확인합니다.


## License

[MIT](./LICENSE)

