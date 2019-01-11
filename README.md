# Refetch

Refetch is Simple HTTP Client by [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). And Heavily inspired from [r2](https://github.com/mikeal/r2).

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

R2 is awesome project. But it isn't friendly with TypeScript. Refetch is written with TypeScript, and It also works well with plain JavaScript too.

## Links
 - [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
 - [r2](https://github.com/mikeal/r2)
