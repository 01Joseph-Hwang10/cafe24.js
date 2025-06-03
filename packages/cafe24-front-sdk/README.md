# cafe24-front-sdk

[![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/cafe24-front-sdk)
[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/01Joseph-Hwang10/cafe24.js/tree/master/packages/cafe24-front-sdk)

[카페24 Front SDK](https://developers.cafe24.com/app/front/common/frontsdk) `CAFE24API`를 편리하게 사용하기 위한 type-safe wrapper입니다.

## Installation

```bash
npm install cafe24-front-sdk
```

## Usage

```typescript
import { Cafe24FrontSDK } from 'cafe24-front-sdk';

// SDK 초기화 설정
const sdk = new Cafe24FrontSDK("cafe24-client-id");

// API 호출 예시
sdk.MALL_ID; // 쇼핑몰 아이디 조회
await sdk.getCustomerIDInfo(); // 고객 ID 정보 조회
await sdk.emptyCart({ basket_shipping_type: "A" }); // 회원 장바구니 비우기
```

## License

[MIT](./LICENSE)


