export class HTTPError extends Error {
    public status: number;
    public context?: string;

    constructor(message: string, status: number, context?: string) {
        super(message);
        this.status = status;
        this.context = context;
    }
}
