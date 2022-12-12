import { Router } from "express";

export interface IBaseController {
    routeName: string;
    readonly router: Router;
}
