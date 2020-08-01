import test from 'ava'
import refetch from '..'

test('Test Get Response as JSON', async t => {
  const result = await refetch.get('https://api.github.com/repos/hazealign/refetch').json()
  t.true(result.id === 165205520)
})

test('.get and without must be same result', async t => {
  const result = await refetch.get('https://api.github.com/repos/hazealign/refetch').json()
  const result2 = await refetch('https://api.github.com/repos/hazealign/refetch').json()
  t.deepEqual(result, result2, 'Response Body is not matching.')
})

test('query option should be work', async t => {
  const originUrl = 'https://api.ipify.org'
  const targetUrl = (() => {
    const url = new URL(originUrl)
    url.searchParams.append('format', 'json')
    return url.toString()
  })()

  const response = refetch.get(originUrl, {
    query: {
      format: 'json'
    }
  })

  t.deepEqual((await response.getResponse()).url, targetUrl)
})

test('When URL Path is Relative', t => {
  // @ts-expect-error
  global.location = {
    href: 'https://localhost:8000/'
  }

  t.notThrows(() => {
    return refetch.get('/test', {
      query: {
        page: 1
      }
    })
  })
})
