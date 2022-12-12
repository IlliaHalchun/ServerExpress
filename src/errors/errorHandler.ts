import { NextFunction, Request, Response } from "express";
import { injectable } from "inversify";
import { IErrorHandler } from "./errorHandler.interface";
import { HTTPError } from "./types/HTTPError";
import "reflect-metadata";

@injectable()
export class ErrorHandler implements IErrorHandler {
    catch(
        err: Error | HTTPError,
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        if (err instanceof HTTPError) {
            res.status(err.status)
                .contentType("application/json")
                .json({
                    message: err.message,
                    code: err.status,
                    context: err.context ?? null,
                });
        } else {
            res.status(500)
                .contentType("application/json")
                .json({ message: err.message });
        }
    }
}
