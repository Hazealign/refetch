import { Body } from 'node-fetch'

export class PartialResponse implements Partial<Body> {
  private _base: Promise<Body>

  constructor (base: Promise<Body>) {
    this._base = base
  }

  async arrayBuffer (): Promise<ArrayBuffer> {
    return (await this._base).arrayBuffer()
  }

  async blob (): Promise<Buffer> {
    return (await this._base).blob()
  }

  async buffer (): Promise<Buffer> {
    return (await this._base).buffer()
  }

  async json (): Promise<any> {
    return (await this._base).json()
  }

  async text (): Promise<string> {
    return (await this._base).text()
  }

  async textConverted (): Promise<string> {
    return (await this._base).textConverted()
  }
}
