import { NextFunction, Request, Response } from "express";

export interface IMidleware {
    execute: (req: Request, res: Response, next: NextFunction) => void;
}
