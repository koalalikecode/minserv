export class Request {
  public body: any = undefined;
  constructor(public raw: any) {}

  get url() {
    return this.raw.url || "/";
  }

  get method() {
    return this.raw.method || "GET";
  }
}
