import { UsersLoginDTO } from "../../dto/users/users.login.dto";
import { UsersRegisterDTO } from "../../dto/users/users.register.dto";
import { User } from "../../entities/user.entity";

export interface IUserService {
    loginUser: (dto: UsersLoginDTO) => User | null;
    validateUser: (dto: UsersLoginDTO) => boolean;
}
