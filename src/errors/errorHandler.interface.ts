import { NextFunction, Request, Response } from "express";
import { HTTPError } from "./types/HTTPError";

export interface IErrorHandler {
    catch: (
        err: Error | HTTPError,
        req: Request,
        res: Response,
        next: NextFunction
    ) => void;
}
