export interface ApiConfig {
    host: string;
    version: string;
}
export interface ConfigHub {
    dev: ApiConfig;
    test: ApiConfig;
    staging: ApiConfig;
    prod: ApiConfig;
}