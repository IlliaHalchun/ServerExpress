import { ILogger } from "./logger.service.interface";
import { ISettingsParam, Logger } from "tslog";
import { injectable } from "inversify";
import "reflect-metadata";

const logObject = {
    main: true,
};

@injectable()
export class LoggerService implements ILogger {
    private logger: Logger<{}>;
    private loggerSettings: ISettingsParam<{}> = {
        prettyLogTemplate: "{{hh}}:{{MM}}:{{ss}} {{logLevelName}}",
        stylePrettyLogs: true,
        prettyLogStyles: {
            logLevelName: {
                "*": ["bold", "black", "bgWhiteBright", "dim"],
                SILLY: ["bold", "green"],
                TRACE: ["bold", "whiteBright"],
                DEBUG: ["bold", "green"],
                INFO: ["bold", "blue"],
                WARN: ["bold", "yellow"],
                ERROR: ["bold", "red"],
                FATAL: ["bold", "redBright"],
            },
        },
    };

    constructor() {
        this.logger = new Logger(this.loggerSettings);
    }

    log(...args: unknown[]): void {
        this.logger.info(...args);
    }

    warn(args: unknown[]): void {
        this.logger.warn(...args);
    }

    error(args: unknown[]): void {
        this.logger.error(...args);
    }
}
