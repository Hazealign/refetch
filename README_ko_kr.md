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
```

## Why?

R2는 매우 훌륭한 프로젝트이지만, 타입 정의가 없는 등 TypeScript 프로젝트에서 사용하기가 어렵습니다. Refetch는 TypeScript로 작성되었으며, 일반 JavaScript에서도 사용할 수 있습니다.

## Links
 - [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
 - [r2](https://github.com/mikeal/r2)
