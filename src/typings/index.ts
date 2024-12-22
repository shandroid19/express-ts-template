import { Request, Response, NextFunction } from "express";

type Controller = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

type Middleware = (req: Request, res: Response, next: NextFunction) => void;

export { Controller, Middleware };
