import { Request } from "../request";
import { Response } from "../response";


export type Handler = (req: Request, res: Response) => void;

export interface Route {
  method: string;
  path: string;
  handler: Handler;
}