import { ClassConstructor, plainToClass } from "class-transformer";
import { validate, ValidatorOptions } from "class-validator";
import { Response, Request, NextFunction } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { IMidleware } from "./midelware.interface";

export class ValidationMidlevare implements IMidleware {
    private ValidatorOptions: ValidatorOptions = {};

    constructor(private classToValidate: ClassConstructor<object>) {}

    execute(req: Request, res: Response, next: NextFunction) {
        const instance = plainToClass(this.classToValidate, req.body);

        validate(instance).then((errors) => {
            if (errors.length > 0) {
                res.status(422).send(errors);
            } else {
                next();
            }
        });
    }
}
