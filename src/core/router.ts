import { Handler, Route } from "./types/http";

export class Router {
  private routes: Route[] = [];

  add(method: string, path: string, handler: Handler) {
    this.routes.push({ method, path, handler });
  }

  find(method: string, path: string): Handler | undefined {
    return this.routes.find(r => r.method === method && r.path === path)?.handler;
  }
}
