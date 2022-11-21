import { environment } from "../../environments/environment" 

export class AppSettings {
    public env: string = environment.deployment_target;
    public api_url: string = environment.api_url;
    public app_url: string = environment.app_url;

    public getEnv(): string {
        return this.env;
    }

    public getApiUrl(): string {
        return this.api_url;
    }

    public getAppUrl(): string {
        return this.app_url;
    }
}
