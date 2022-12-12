import { Server } from "http";
import express, { Express } from "express";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TYPES } from "./types";
import { IUsersController } from "./controllers/users/users.controller.interface";
import { json } from "body-parser";
import { IErrorHandler } from "./errors/errorHandler.interface";
import { ILogger } from "./logger/logger.service.interface";

@injectable()
export class App {
    private app: Express;
    private port: number;
    private server: Server;

    constructor(
        @inject(TYPES.UsersController)
        private usersController: IUsersController,
        @inject(TYPES.ErrorHandler) private errorHandler: IErrorHandler,
        @inject(TYPES.LoggerService) private LoggerService: ILogger
    ) {
        this.app = express();
        this.port = 3000;
    }

    private initCallback() {
        this.LoggerService.log("Server is started on port: " + this.port);
        this.LoggerService.error("Error");
    }

    private useMidleware() {
        this.app.use(json());
    }

    private useRoutes() {
        this.app.use("/users", this.usersController.router);
    }

    private exceptionFilter() {
        this.app.use(this.errorHandler.catch.bind(this));
    }

    public async init() {
        this.useMidleware();
        this.useRoutes();
        this.exceptionFilter();
        this.server = this.app.listen(this.port, this.initCallback.bind(this));
    }
}
