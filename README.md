# Refetch

Refetch is Simple HTTP Client by [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). And Heavily inspired from [r2](https://github.com/mikeal/r2).

## Usage
```
npm install --save @hazelee/refetch
```

```ts
import refetch from '@hazelee/refetch'

// in async function...
const result = await refetch('https://api.github.com/repos/hazealign/refetch', { method: 'get' }).json()
const result2 = await refetch.get('https://api.github.com/repos/hazealign/refetch').json()

// Put URL Search Parameter (Query) in Options.
// It doesn't supports in fetch API's standard.
const myIp = await refetch('https://api.ipify.org', {
  query: { format: 'json' },
  // query: '?format=json',
  // query: new URLSearchParams(),
}).json()
```

## Changelogs

### v1.1.0 (2020-07-10)
 - Update Latest Dependencies.
 - Save Response Data in `PartialResponse` when evaluating same `refetch` function.
   ```ts
    const base = refetch('https://api.github.com/repos/hazealign/refetch', { method: 'get' })

    const text = await base.text()
    // already Response result is cached in PartialResponse. ;)
    const json = await base.json()
   ```
 - Support `query` parameter in options. No more create URL instance and URLSearchParams instance. ;)

## Why?

R2 is awesome project. But it isn't friendly with TypeScript. Refetch is written with TypeScript, and It also works well with plain JavaScript too.

## Links
 - [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
 - [r2](https://github.com/mikeal/r2)
