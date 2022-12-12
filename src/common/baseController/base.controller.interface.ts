import { Router } from "express";

export interface IBaseController {
    readonly router: Router;
}
