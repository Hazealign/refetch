import Refetch from './Refetch'
import { Request, RequestInit } from 'node-fetch'

// default
export default new Refetch().evaluate

// per methods
export function put (url: string | Request, opts?: RequestInit) {
  return new Refetch('put').evaluate(url, opts)
}

export function get (url: string | Request, opts?: RequestInit) {
  return new Refetch('get').evaluate(url, opts)
}

export function post (url: string | Request, opts?: RequestInit) {
  return new Refetch('post').evaluate(url, opts)
}

export function patch (url: string | Request, opts?: RequestInit) {
  return new Refetch('patch').evaluate(url, opts)
}

export function head (url: string | Request, opts?: RequestInit) {
  return new Refetch('head').evaluate(url, opts)
}

export function del (url: string | Request, opts?: RequestInit) {
  return new Refetch('delete').evaluate(url, opts)
}
