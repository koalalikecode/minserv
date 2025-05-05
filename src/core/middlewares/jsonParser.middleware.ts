import { Middleware } from "../types/middleware";

export function jsonBodyParser(): Middleware {
  return (req, res, next) => {
    const method = req.raw.method || 'GET';
    const contentType = req.raw.headers['content-type'] || '';

    if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
      if (contentType.includes('application/json')) {
        let body = '';

        req.raw.on('data', (chunk: Buffer) => {
          body += chunk.toString();
        });

        req.raw.on('end', () => {
          try {
            req.body = JSON.parse(body);
          } catch (err) {
            res.raw.writeHead(400, { 'Content-Type': 'text/plain' });
            res.raw.end('Invalid JSON');
            return;
          }
          next();
        });

      } else {
        next();
      }
    } else {
      next();
    }
  };
}
