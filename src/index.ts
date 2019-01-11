import Refetch from './Refetch'
import { Request, RequestInit } from 'node-fetch'

const exportFunctions = {
  put: (url: string | Request, opts?: RequestInit) => new Refetch('put').evaluate(url, opts),
  get: (url: string | Request, opts?: RequestInit) => new Refetch('get').evaluate(url, opts),
  post: (url: string | Request, opts?: RequestInit) => new Refetch('post').evaluate(url, opts),
  patch: (url: string | Request, opts?: RequestInit) => new Refetch('patch').evaluate(url, opts),
  head: (url: string | Request, opts?: RequestInit) => new Refetch('head').evaluate(url, opts),
  delete: (url: string | Request, opts?: RequestInit) => new Refetch('delete').evaluate(url, opts)
}

const defaultExport = (url: string | Request, opts?: RequestInit) => new Refetch().evaluate(url, opts)

// default
export default Object.assign(defaultExport, exportFunctions)
