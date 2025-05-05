export class Response {
    constructor(public raw: any) {}
  
    send(body: string) {
      this.raw.writeHead(200, { 'Content-Type': 'text/plain' });
      this.raw.end(body);
    }
  }