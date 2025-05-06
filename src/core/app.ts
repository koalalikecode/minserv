import { createServer } from "http";
import { Router } from "./router";
import { Request } from "./request";
import { Response } from "./response";
import { Handler } from "./types/http";
import { Middleware } from "./types/middleware";

export class App {
  private router = new Router();
  private middlewares: Middleware[] = [];

  get(path: string, handler: Handler) {
    this.router.add("GET", path, handler);
  }

  post(path: string, handler: Handler) {
    this.router.add('POST', path, handler);
  }

  use(middleware: Middleware) {
    this.middlewares.push(middleware);
  }

  listen(port: number, callback?: () => void) {
    const server = createServer((req, res) => {
      const request = new Request(req);
      const response = new Response(res);

      const handler = this.router.find(req.method || "GET", req.url || "/");

      let idx = -1;

      const next = () => {
        idx++;
        if (idx < this.middlewares.length) {
          this.middlewares[idx](request, response, next);
        } else if (handler) {
          handler(request, response);
        } else {
          res.writeHead(404);
          res.end("Not Found");
        }
      };

      next();
    });

    server.listen(port, callback);
  }
}
