import { createServer } from 'http';
import { Router } from './router';
import { Request } from './request';
import { Response } from './response';
import { Handler } from './types/http';

export class App {
  private router = new Router();

  get(path: string, handler: Handler) {
    this.router.add('GET', path, handler);
  }

  listen(port: number) {
    const server = createServer((req, res) => {
      const request = new Request(req);
      const response = new Response(res);

      const handler = this.router.find(req.method || 'GET', req.url || '/');
      if (handler) {
        handler(request, response);
      } else {
        res.writeHead(404);
        res.end('Not Found');
      }
    });

    server.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  }
}
