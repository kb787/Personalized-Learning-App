import { NextFunction, Request, Response } from "express";
import { ControllerType } from "D:/PersonalizedApp/server/src/features/auth/types/controller"
import { RequestHandler } from "express";

const TryCatch = (controllerFunc: ControllerType): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controllerFunc(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export default TryCatch;