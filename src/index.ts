import { App } from "./App";
import { Container } from "inversify";
import { TYPES } from "./types";
import { UsersController } from "./controllers/users/users.controller";
import { IUsersController } from "./controllers/users/users.controller.interface";
import { IErrorHandler } from "./errors/errorHandler.interface";
import { ErrorHandler } from "./errors/errorHandler";
import { IUserService } from "./services/users/users.service.interface";
import { UsersService } from "./services/users/users.service";

const container = new Container();

container.bind<App>(TYPES.App).to(App);
container.bind<IErrorHandler>(TYPES.ErrorHandler).to(ErrorHandler);
container.bind<IUsersController>(TYPES.UsersController).to(UsersController);
container.bind<IUserService>(TYPES.UsersService).to(UsersService);

const app = container.get<App>(TYPES.App);
app.init();
