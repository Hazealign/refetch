# Refetch

Refetch는 JavaScript / TypeScript용으로 [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)를 사용해 만든 간단한 HTTP 클라이언트입니다. [r2](https://github.com/mikeal/r2)라는 프로젝트에서 크게 영향을 받아 만들어졌습니다.

## Usage
```
npm install --save @hazelee/refetch
```

```js
import refetch from 'refetch'

// in async function...
const result = await refetch('https://api.github.com/repos/hazealign/refetch', { method: 'get' }).json()
const result2 = await refetch.get('https://api.github.com/repos/hazealign/refetch').json()

// Fetch API의 표준 기능은 아니지만, URL Query를 Parameter로 넣을 수도 있습니다.
const myIp = await refetch('https://api.ipify.org', {
  query: { format: 'json' },
  // query: '?format=json',
  // query: new URLSearchParams(),
}).json()
```

## Changelogs

### v1.1.0 (2020-07-10)
 - 최신 의존성으로 업데이트하였습니다.
 - 같은 `refetch` 호출 구문 내에서 여러번 `await`을 호출 시, 내부 Response 값을 `PartialResponse` 안에 저장하도록 했습니다.
    ```ts
    const base = refetch('https://api.github.com/repos/hazealign/refetch', { method: 'get' })

    const text = await base.text()
    // already Response result is cached in PartialResponse. ;)
    const json = await base.json()
   ```
 - 옵션 내에서 `query` 파라미터를 지원합니다. 더 이상 귀찮게 URL을 만들고, URLSearchParams를 만들 필요가 없습니다.

## Why?

R2는 매우 훌륭한 프로젝트이지만, 타입 정의가 없는 등 TypeScript 프로젝트에서 사용하기가 어렵습니다. Refetch는 TypeScript로 작성되었으며, 일반 JavaScript에서도 사용할 수 있습니다.

## Links
 - [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
 - [r2](https://github.com/mikeal/r2)
