import express, { Response, Request, NextFunction } from "express";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import { BaseController } from "../../common/baseController/base.controller";
import { IRouteInfo } from "../../common/route.interface";
import { ValidationMidlevare } from "../../common/validate.midlevare";
import { UsersLoginDTO } from "../../dto/users/users.login.dto";
import { UsersRegisterDTO } from "../../dto/users/users.register.dto";
import { ILoggerService } from "../../logger/logger.service.interface";
import { TYPES } from "../../types";
import { IUsersController } from "./users.controller.interface";

@injectable()
export class UsersController
    extends BaseController
    implements IUsersController
{
    private routes: IRouteInfo[] = [
        {
            path: "/login",
            method: "get",
            callback: this.login,
            midlewares: [new ValidationMidlevare(UsersLoginDTO)],
        },
        { path: "/register", method: "get", callback: this.register },
    ];

    constructor(@inject(TYPES.LoggerService) LoggerService: ILoggerService) {
        super(LoggerService);
        this.routeName = "/users";
        this.bindRoutes(this.routes);
    }

    public login(
        req: Request<{}, {}, UsersLoginDTO>,
        res: Response,
        next: NextFunction
    ) {
        res.status(200).send("login");
    }

    public register(
        req: Request<{}, {}, UsersRegisterDTO>,
        res: Response,
        next: NextFunction
    ) {
        res.status(200).send("register");
    }
}
