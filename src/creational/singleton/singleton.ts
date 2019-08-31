export class Config {
    private static instance: Config;
    private databaseUrl: string;

    private constructor() { }

    public static getInstance(): Config {
        if (!Config.instance) {
            Config.instance = new Config();
        }

        return Config.instance;
    }

    public setDataBaseUrl(databaseUrl: string): void {
        this.databaseUrl = databaseUrl;
    }

    public getDatabaseUrl(): string {
        return this.databaseUrl;
    }
}
