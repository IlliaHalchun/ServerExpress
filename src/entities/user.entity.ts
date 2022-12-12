import { hash } from "bcrypt";
import { isString } from "class-validator";

export class User {
    private _password: string;
    private readonly _email: string;
    private readonly _name: string;

    constructor(email: string, name: string, password: string) {
        this._email = email;
        this._name = name;
    }

    private async setEncryptedPassword(password: string) {
        const encodedPassword = await hash(password, 10);
        this._password = encodedPassword;
    }
}
