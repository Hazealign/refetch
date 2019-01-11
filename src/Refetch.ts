import fetch, { Request, RequestInit, Body } from 'node-fetch'
import { PartialResponse } from './PartialResponse'

type FetchFunction = (url: string | Request, init?: RequestInit) => Promise<Body>

export default class Refetch {
  fetch: FetchFunction
  method?: string

  constructor (method ?: string) {
    this.fetch = ((typeof window !== 'undefined' && window.fetch) ? window.fetch : fetch) as FetchFunction
    if (method !== undefined) this.method = method
  }

  evaluate (url: string | Request, opts?: RequestInit): PartialResponse {
    if (this.method) {
      if (typeof url === 'string' && opts !== undefined) opts.method = this.method
      else if (typeof url === 'object') url.method = this.method
    }

    return new PartialResponse(this.fetch(url, opts))
  }
}
