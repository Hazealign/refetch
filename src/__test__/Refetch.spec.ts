import test from 'ava'
import refetch from '../'

test('Test Get Response as JSON', async t => {
  const result = await refetch.get('https://api.github.com/repos/hazealign/refetch').json()
  t.true(result.id === 165205520)
})

test('.get and without must be same result', async t => {
  const result = await refetch.get('https://api.github.com/repos/hazealign/refetch').json()
  const result2 = await refetch('https://api.github.com/repos/hazealign/refetch').json()
  t.deepEqual(result, result2, 'Response Body is not matching.')
})
