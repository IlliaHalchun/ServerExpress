import { App } from "./App";
import { Container } from "inversify";
import { TYPES } from "./types";
import { UsersController } from "./controllers/users/users.controller";
import { IUsersController } from "./controllers/users/users.controller.interface";
import { IErrorHandler } from "./errors/errorHandler.interface";
import { ErrorHandler } from "./errors/errorHandler";
import { IUserService } from "./services/users/users.service.interface";
import { UsersService } from "./services/users/users.service";
import { ILoggerService } from "./logger/logger.service.interface";
import { LoggerService } from "./logger/logger.service";

const container = new Container();

container.bind<App>(TYPES.App).to(App).inSingletonScope();
container
    .bind<IErrorHandler>(TYPES.ErrorHandler)
    .to(ErrorHandler)
    .inSingletonScope();
container
    .bind<IUsersController>(TYPES.UsersController)
    .to(UsersController)
    .inSingletonScope();
container
    .bind<IUserService>(TYPES.UsersService)
    .to(UsersService)
    .inSingletonScope();
container
    .bind<ILoggerService>(TYPES.LoggerService)
    .to(LoggerService)
    .inSingletonScope();

const app = container.get<App>(TYPES.App);
app.init();
