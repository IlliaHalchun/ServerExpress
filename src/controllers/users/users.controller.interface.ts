import { NextFunction, Request, Response } from "express";
import { IBaseController } from "../../common/baseController/base.controller.interface";

export interface IUsersController extends IBaseController {
    login: (req: Request, res: Response, next: NextFunction) => void;
    register: (req: Request, res: Response, next: NextFunction) => void;
}
