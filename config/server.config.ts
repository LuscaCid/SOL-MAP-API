import "dotenv/config"
import { MongooseModuleOptions } from "@nestjs/mongoose";

export class ServerConfig {
    public static getEnv (key : string, throwOnMissing = false) {
        const value = process.env[key];
        if (!value && throwOnMissing)  
            throw new Error("Valor nao encontrado em dotenv para ^" + key)   
        return value
    }

    public static getMongoDbConnectionString () {
        return this.getEnv("CONNECTION_STRING", true);
    }
    public static getMongoDbConfig() {
        return {
            dbName :  this.getEnv("MAIN_DATABASE", true),
            connectionName : this.getEnv("CONNECTION_NAME", true),
            retryAttempts : 4,
            connectTimeoutMS : 2000,
            
        } satisfies MongooseModuleOptions;
    }
    public static getMongoDbName() {
        return this.getEnv("CONNECTION_NAME", true)
    }
}