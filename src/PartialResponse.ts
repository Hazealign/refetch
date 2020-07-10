import type { Blob, Response } from './'

export class PartialResponse implements Partial<Response> {
  constructor (
    private readonly base: Promise<Response>
  ) {}

  private cachedResponse?: Response

  async getResponse () {
    if (this.cachedResponse) return this.cachedResponse
    else {
      this.cachedResponse = await this.base
      return this.cachedResponse
    }
  }

  async arrayBuffer (): Promise<ArrayBuffer> {
    if (!this.cachedResponse) {
      this.cachedResponse = await this.base
    }

    return await this.cachedResponse.arrayBuffer()
  }

  async blob (): Promise<Blob> {
    if (!this.cachedResponse) {
      this.cachedResponse = await this.base
    }

    return await this.cachedResponse.blob()
  }

  async buffer (): Promise<Buffer> {
    if (!this.cachedResponse) {
      this.cachedResponse = await this.base
    }

    return await this.cachedResponse.buffer()
  }

  async json (): Promise<any> {
    if (!this.cachedResponse) {
      this.cachedResponse = await this.base
    }

    return await this.cachedResponse.json()
  }

  async text (): Promise<string> {
    if (!this.cachedResponse) {
      this.cachedResponse = await this.base
    }

    return await this.cachedResponse.text()
  }

  async textConverted (): Promise<string> {
    if (!this.cachedResponse) {
      this.cachedResponse = await this.base
    }

    return await this.cachedResponse.textConverted()
  }
}
