# cafe24-api-client

[![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/cafe24-api-client)
[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/01Joseph-Hwang10/cafe24.js/tree/master/packages/cafe24-api-client)

[카페24 REST API](https://developers.cafe24.com/docs/api) HTTP 클라이언트입니다.

## Installation

```bash
npm install cafe24-api-client
```

## Usage

### Quick Start

```typescript
import api from 'cafe24-api-client';

const client = new api.admin.Client({
  mallId: 'myMallId',
  taskQueue: true, // Cafe24의 Rate limit을 준수하는 TaskQueue를 사용합니다.
  accessToken: "token", // Admin API 엑세스를 위한 Access Token
});

const { products } = await client.products.retrieveAListOfProducts(
  {
    display: "T",
    selling: "T",
    limit: 100,
  },
  { 
    // `api.admin.Client` 생성 시 accessToken을 설정하지 않고 
    // API 요청 시마다 accessToken을 설정할 수 있습니다.
    accessToken: "token", 
    // API 요청이 TaskQueue를 통해 실행되도록 하여
    // Cafe24의 Rate limit을 준수할 수 있습니다.
    fetchPolicy: "queue",
  },
);

console.log(products);
```

### Client의 종류

Cafe24에서는 [admin], [front], [d.collection], [analytics]의 4개 종류의 API를 제공하며, 
본 라이브러리에서는 이 4개의 API에 대한 Client를 각각 제공합니다.

```typescript
import api from 'cafe24-api-client';

const admin = new api.admin.Client({/* ... */} satisfies api.admin.ClientOptions);
const front = new api.front.Client({/* ... */} satisfies api.front.ClientOptions);
const dcollection = new api.dcollection.Client({/* ... */} satisfies api.dcollection.ClientOptions);
const analytics = new api.analytics.Client({/* ... */} satisfies api.analytics.ClientOptions);
```

### Client의 구성

각 client는 해당 documentation 페이지의 toc 구조를 따라 method를 제공합니다.

예를 들어, [front] API의 경우 [Categories products] 섹션이 존재합니다.

여기서 [Categories products] 는 특수문자를 제외한 `lowercase`로 변환되어 categoriesproducts라는 이름의 scope가 됩니다. 

이 scope는 [Categories products] 섹션의 `*properties` 섹션을 제외한 하위 섹션들을 method로 제공합니다. 이때 method의 이름은 해당 섹션의 해시를 `camelCase`로 변환한 것이 됩니다.

- https://developers.cafe24.com/docs/ko/api/front/#retrieve-a-list-of-products-by-category : retrieveAListOfProductsByCategory
- https://developers.cafe24.com/docs/ko/api/front/#retrieve-a-count-of-products-by-category : retrieveACountOfProductsByCategory

위의 내용들을 코드로 정리하면 아래와 같습니다.

```typescript
import api from 'cafe24-api-client';

const front = new api.front.Client({
  clientId: 'myClientId',
});

const { products } = await front.categoriesproducts.retrieveAListOfProductsByCategory(
  {
    categoryNo: 1,
    limit: 100,
  },
  { fetchPolicy: "queue" },
);

console.log(products);
```


### Request/Response 타입 가져오기

각 API 요청의 Request, Response 스키마는 interface로 정의되어 있는데, 
본 패키지에서는 그 수가 너무 많아 이들을 직접 export 하지 않습니다.

대신, `RequestType`과 `ResponseType`을 사용하여 Request, Response 타입을 가져올 수 있습니다.

```typescript
import api, { RequestType, ResponseType } from 'cafe24-api-client';

type RetrieveAListOfProductsRequest = RequestType<api.admin.Client['products']['retrieveAListOfProducts']>;
type RetrieveAListOfProductsResponse = ResponseType<api.admin.Client['products']['retrieveAListOfProducts']>;
```

### Everything is `camelCased`

모든 method의 request 타입, response 타입의 property는 `camelCase`로 변환되어 있습니다.

이는 camelCase가 JS/TS에서 일반적으로 사용되는 네이밍 컨벤션이기 때문입니다.

## License

[MIT](./LICENSE)


[admin]: https://developers.cafe24.com/docs/ko/api/admin
[front]: https://developers.cafe24.com/docs/ko/api/front
[d.collection]: https://developers.cafe24.com/docs/ko/api/dcollection
[analytics]: https://developers.cafe24.com/docs/ko/api/cafe24data
[Categories products]: https://developers.cafe24.com/docs/ko/api/front/#categories__products

