import { Server } from "http";
import express, { Express } from "express";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TYPES } from "./types";
import { IUsersController } from "./controllers/users/users.controller.interface";
import { json } from "body-parser";
import { IErrorHandler } from "./errors/errorHandler.interface";

@injectable()
export class App {
    private app: Express;
    private port: number;
    private server: Server;

    constructor(
        @inject(TYPES.UsersController)
        private usersController: IUsersController,
        @inject(TYPES.ErrorHandler) private errorHandler: IErrorHandler
    ) {
        this.app = express();
        this.port = 3000;
    }

    private initCallback() {
        console.log("Server is started in port " + this.port);
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
