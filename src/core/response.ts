export class Response {
    constructor(public raw: any) {}
  
    send(body: string, statusCode: number = 200) {
      this.raw.writeHead(statusCode, { 'Content-Type': 'text/plain' });
      this.raw.end(body);
    }
    
    json(body: any, statusCode: number = 200) {
      this.raw.writeHead(statusCode, { 'Content-Type': 'application/json' });
      this.raw.end(JSON.stringify(body));
    }

    status(code: number) {
      this.raw.writeHead(code);
      return this;
    }

    end() {
      this.raw.end();
    }
  }