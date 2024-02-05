import { NextFunction, Request, Response } from "express";
import { Types } from "mongoose";
import { Server } from "socket.io";
import { userAuth } from "../models/auth";

export type I_ObjectId = {
  _id: Types.ObjectId;
};

export type InterceptType = {
  auth: userAuth & I_ObjectId;
  downloadUrls: string[];
  io: Server;
};

export type ControllerType<T = {}> = (
  req: Request<any, any, any, any, Record<string, any>> & T,
  res: Response,
  next: NextFunction,
) => Promise<void | Response<any, Record<string, any>>>;