import { Body } from 'node-fetch'

export class PartialResponse implements Partial<Body> {
  base: Promise<Body>

  constructor (base: Promise<Body>) {
    this.base = base
  }

  async arrayBuffer (): Promise<ArrayBuffer> {
    return (await this.base).arrayBuffer()
  }

  async blob (): Promise<Buffer> {
    return (await this.base).blob()
  }

  async buffer (): Promise<Buffer> {
    return (await this.base).buffer()
  }

  async json (): Promise<any> {
    return (await this.base).json()
  }

  async text (): Promise<string> {
    return (await this.base).text()
  }

  async textConverted (): Promise<string> {
    return (await this.base).textConverted()
  }
}
