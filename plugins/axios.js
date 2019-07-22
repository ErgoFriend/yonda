import { cacheAdapterEnhancer } from 'axios-extensions'
import LRUCache from 'lru-cache'
const ONE_HOUR = 1000 * 60 * 60

const defaultCache = new LRUCache({
  maxAge: ONE_HOUR
})

export default function({ $axios }) {
  const defaults = $axios.defaults
  // https://github.com/kuitos/axios-extensions

  /* eslint-disable no-console */
  console.log('plugins 1')
  console.log(
    defaultCache.get(
      'http://localhost:3000/api/novelapi/api/?libtype=2&out=json&ncode=n0859fa'
    )
  )
  /* eslint-enable no-console */

  defaults.adapter = cacheAdapterEnhancer(defaults.adapter, {
    enabledByDefault: false,
    cacheFlag: 'useCache',
    defaultCache
  })
}
