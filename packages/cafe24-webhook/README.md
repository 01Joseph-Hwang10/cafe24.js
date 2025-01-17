# Cafe24 Webhook

[![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/cafe24-webhook)
[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/01Joseph-Hwang10/cafe24.js/tree/master/packages/cafe24-webhook)

[카페24 웹훅](https://developers.cafe24.com/app/front/app/develop/webhook)의 
[이벤트 데이터](https://developers.cafe24.com/app/front/app/develop/webhook/sample)에 대한 
TypeScript 타입 정의를 제공합니다.

## Installation

```bash
npm install cafe24-webhook
```

## Usage

### Quick Start

```typescript
import express from 'express';
import webhook from 'cafe24-webhook';

const app = express();
app.use(express.json());

/**
 * 임의의 카페24 웹훅 이벤트를 처리하는 엔드포인트입니다.
 * 아래와 같이 리퀘스트의 body를 webhook.Event 타입으로 캐스팅하여 사용할 수 있습니다.
 */
app.post('/on-product-added', (req, res) => {
  // 이벤트 NO. 90001에 해당하는 이벤트 데이터입니다.
  const data = new webhook.OnProductAdded(req.body);

  // Class로 생성하지 않고 object literal의 type assertion으로 사용할 수도 있습니다.
  const rawData = req.body as webhook.OnProductAdded;

  // Do something with the data 
  // ...
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

### Get Type or Class by Event No.

`webhook.events` 네임스페이스를 활용해 원하는 이벤트 번호에 해당하는 타입이나 클래스를 가져올 수 있습니다.

```typescript
import webhook from 'cafe24-webhook';

const eventNo = 90001;
const EventType = webhook.events[eventNo];

const data = new EventType({/* ... */});

console.log(data instanceof webhook.OnProductAdded); // true
```


## Webhook `{ 'Event Number' -> 'Name' }` Mapping

카페24 웹훅의 이벤트 번호와 이름을 매핑한 테이블은 [src/types/event-map.ts](./src/types/event-map.ts)에서 확인할 수 있습니다.

> [!NOTE]
> 각 key에 할당된 type이 전부 `t`로 시작할 것입니다. 실제 사용 시에는 `t`를 생략하고 사용하시면 됩니다.

## License

[MIT](./LICENSE)

