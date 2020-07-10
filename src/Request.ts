import { Request, RequestInfo, RequestInit } from 'node-fetch'

const INTERNALS = Symbol('Request internals')

const isRequest = (object: any) => {
  return (
    typeof object === 'object' &&
    typeof object[INTERNALS] === 'object'
  );
};

export type ParameterType = URLSearchParams | { [key: string]: any } | string

export class RefetchRequest extends Request {
  public query?: ParameterType

  constructor (input: RequestInfo, init?: RefetchRequestInit) {
    super(input, init)

    this.query = isRequest(input)
      ? (input as RefetchRequest).query ?? init?.query
      : init?.query
  }

  clone (): RefetchRequest {
    return new RefetchRequest(this)
  }
}

export interface RefetchRequestInit extends RequestInit {
  query?: ParameterType
}
