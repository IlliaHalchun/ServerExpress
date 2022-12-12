import { Application, NextFunction, Request, Response, Router } from "express";
import { IRouteInfo } from "../route.interface";
import "reflect-metadata";
import { injectable } from "inversify";
import { IBaseController } from "./base.controller.interface";

@injectable()
export abstract class BaseController implements IBaseController {
    readonly _router: Router;

    constructor() {
        this._router = Router();
    }

    public get router() {
        return this._router;
    }

    protected bindRoutes(routes: IRouteInfo[]) {
        for (const route of routes) {
            const handler = route.callback.bind(this);
            const midlewares = route.midlewares?.map((mw) =>
                mw.execute.bind(mw)
            );
            const pipeline = midlewares ? [...midlewares, handler] : handler;
            this._router[route.method](route.path, pipeline);
        }
    }
}
