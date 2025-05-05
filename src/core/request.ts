export class Request {
    constructor(public raw: any) {}
  
    get url() {
      return this.raw.url || '/';
    }
  }
  