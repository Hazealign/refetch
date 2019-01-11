import test from 'ava'
import { get } from './../src'

test('Test Get Response as JSON', async t => {
  const result = await get('https://api.github.com/repos/hazealign/refetch').json()
  t.true(result.id === 165205520)
})
