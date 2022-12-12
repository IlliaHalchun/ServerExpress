import { Router, Request, Response, NextFunction } from "express";
import { IMidleware } from "./midelware.interface";

export interface IRouteInfo {
    method: keyof Pick<Router, "get" | "post" | "put" | "delete" | "patch">;
    path: string;
    callback: (req: Request, res: Response, next: NextFunction) => void;
    midlewares?: IMidleware[];
}
