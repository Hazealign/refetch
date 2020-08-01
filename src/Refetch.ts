import fetch, { Request, RequestInit } from 'node-fetch'
import { Response } from './'
import { PartialResponse } from './PartialResponse'
import { ParameterType, RefetchRequest, RefetchRequestInit } from './Request'

type FetchFunction = (url: string | Request, init?: RequestInit) => Promise<Response>

export default class Refetch {
  fetch: FetchFunction
  method?: string

  constructor (method ?: string) {
    this.fetch = ((typeof window !== 'undefined' && window.fetch) ? window.fetch.bind(window) : fetch) as FetchFunction
    if (method !== undefined) this.method = method
  }

  evaluate (url: string | RefetchRequest, opts?: RefetchRequestInit): PartialResponse {
    if (this.method) {
      if (typeof url === 'string' && opts !== undefined) opts.method = this.method
      else if (url instanceof RefetchRequest) url.method = this.method
    }

    // Set Merge About URL Query.
    if (typeof url === 'string' && opts?.query !== undefined) {
      url = this.mergeQueryWithUrl(url, opts.query)
    }

    if (url instanceof RefetchRequest && url.query !== undefined) {
      url.url = this.mergeQueryWithUrl(url.url, url.query)
    }

    return new PartialResponse(this.fetch(url, opts))
  }

  private mergeQueryWithUrl (preUrl: string, param: ParameterType) {
    let url: URL

    try {
      url = new URL(preUrl)
    } catch (ex) {
      if (typeof location === 'undefined') {
        throw ex
      }

      url = new URL(preUrl, location.href)
    }

    const searchParams = (param instanceof URLSearchParams) ? param : new URLSearchParams(param)
    searchParams.forEach((value, key) => url.searchParams.append(key, value))

    return url.toString()
  }
}
