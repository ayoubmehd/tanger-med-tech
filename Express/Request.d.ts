import { Request } from "express";

declare global {
  interface CustomRequest<T> extends Request {
    body: T;
  }
}
