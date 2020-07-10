import Refetch from './Refetch'
import type { RefetchRequest, RefetchRequestInit } from './Request'

const exportFn = {
  put: (url: string | RefetchRequest, opts?: RefetchRequestInit) => new Refetch('put').evaluate(url, opts),
  get: (url: string | RefetchRequest, opts?: RefetchRequestInit) => new Refetch('get').evaluate(url, opts),
  post: (url: string | RefetchRequest, opts?: RefetchRequestInit) => new Refetch('post').evaluate(url, opts),
  patch: (url: string | RefetchRequest, opts?: RefetchRequestInit) => new Refetch('patch').evaluate(url, opts),
  head: (url: string | RefetchRequest, opts?: RefetchRequestInit) => new Refetch('head').evaluate(url, opts),
  delete: (url: string | RefetchRequest, opts?: RefetchRequestInit) => new Refetch('delete').evaluate(url, opts)
}

const defaultFn = (url: string | RefetchRequest, opts?: RefetchRequestInit) => new Refetch().evaluate(url, opts)
const refetch = Object.assign(defaultFn, exportFn)

export {
  Blob,
  Body,
  BodyInit,
  FetchError,
  HeaderInit,
  Headers,
  HeadersInit,
  RequestCache,
  RequestContext,
  RequestCredentials,
  RequestInfo,
  RequestMode,
  RequestRedirect,
  Response,
  ResponseInit,
  ResponseType
} from 'node-fetch'
export {
  RefetchRequest,
  RefetchRequestInit
} from './Request'

// default
export default refetch
