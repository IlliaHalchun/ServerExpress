import * as dotenv from "dotenv";
import { IConfigService } from "./config.service.interface";

export class CongigService implements IConfigService {
    constructor() {
        let config = dotenv.config();
        if (config.error) {
        }
    }

    get<T extends string | number>(key: string): T {}
}
