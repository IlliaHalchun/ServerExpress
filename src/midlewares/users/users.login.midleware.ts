import { Response, Request, NextFunction } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { IMidleware } from "../../common/midelware.interface";

export class LoginMidleware implements IMidleware {
    execute(rreq: Request, res: Response, next: NextFunction) {
        console.log("Midleware");
        next();
    }
}
