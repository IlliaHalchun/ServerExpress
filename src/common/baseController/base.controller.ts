import { Application, NextFunction, Request, Response, Router } from "express";
import { IRouteInfo } from "../route.interface";
import "reflect-metadata";
import { inject, injectable } from "inversify";
import { IBaseController } from "./base.controller.interface";
import { ILoggerService } from "../../logger/logger.service.interface";
import { TYPES } from "../../types";

@injectable()
export abstract class BaseController implements IBaseController {
    public routeName: string;
    readonly _router: Router;

    constructor(
        @inject(TYPES.LoggerService) private LoggerService: ILoggerService
    ) {
        this._router = Router();
    }

    public get router() {
        return this._router;
    }

    protected bindRoutes(routes: IRouteInfo[]) {
        for (const route of routes) {
            this.LoggerService.log(
                "Path: " + this.routeName + route.path + " Was created"
            );
            const handler = route.callback.bind(this);
            const midlewares = route.midlewares?.map((mw) =>
                mw.execute.bind(mw)
            );
            const pipeline = midlewares ? [...midlewares, handler] : handler;
            this._router[route.method](route.path, pipeline);
        }
    }
}
