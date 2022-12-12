import { IConfigService } from "./config.service.interface";

export class CongigService implements IConfigService {
    get<T extends string | number>(key: string): T {
        console.log();
    }
}
