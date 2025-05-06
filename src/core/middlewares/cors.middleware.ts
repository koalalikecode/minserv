import { Middleware } from "../types/middleware";

export function cors(options?: { origin?: string, methods?: string, headers?: string }) : Middleware {
  const {
    origin = '*',
    methods = 'GET,HEAD,PUT,PATCH,POST,DELETE',
    headers = 'Content-Type,Authorization'
  } = options || {};

  return (req, res, next) => {
    res.raw.setHeader('Access-Control-Allow-Origin', origin);
    res.raw.setHeader('Access-Control-Allow-Methods', methods);
    res.raw.setHeader('Access-Control-Allow-Headers', headers);

    if (req.method === 'OPTIONS') {
      res.raw.writeHead(204);
      res.raw.end();
      return;
    }

    next();
  };
}