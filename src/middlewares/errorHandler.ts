import { Request, Response, NextFunction } from "express";

// Middleware to send status 500 to the client on error
const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).send({ message: "Server Error", error });
  next();
};

export default errorHandler;
