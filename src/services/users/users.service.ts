import { injectable } from "inversify";
import { UsersLoginDTO } from "../../dto/users/users.login.dto";
import { IUserService } from "./users.service.interface";

@injectable()
export class UsersService implements IUserService {
    public validateUser(dto: UsersLoginDTO) {
        return true;
    }

    public loginUser(dto: UsersLoginDTO) {
        return null;
    }
}
