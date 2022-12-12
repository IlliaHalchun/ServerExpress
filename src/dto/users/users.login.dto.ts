import { IsEmail, IsString } from "class-validator";

export class UsersLoginDTO {
    @IsEmail()
    login: string;

    @IsString()
    password: string;
}
