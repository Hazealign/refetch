import type { Blob, Body } from 'node-fetch'

export class PartialResponse implements Partial<Body> {
  constructor (
    private readonly base: Promise<Body>
  ) {}

  async arrayBuffer (): Promise<ArrayBuffer> {
    return await (await this.base).arrayBuffer()
  }

  async blob (): Promise<Blob> {
    return await (await this.base).blob()
  }

  async buffer (): Promise<Buffer> {
    return await (await this.base).buffer()
  }

  async json (): Promise<any> {
    return await (await this.base).json()
  }

  async text (): Promise<string> {
    return await (await this.base).text()
  }

  async textConverted (): Promise<string> {
    return await (await this.base).textConverted()
  }
}
