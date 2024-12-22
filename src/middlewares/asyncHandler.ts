import { Request, Response, NextFunction } from "express";
import { Controller } from "../typings";

//Middleware to catch the error and pass it down to next middleware
const asyncErrorHandler =
  (func: Controller) => (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(func(req, res, next)).catch(next);
  };

export default asyncErrorHandler;
