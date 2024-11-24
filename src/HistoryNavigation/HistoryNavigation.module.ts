import { Module } from "@nestjs/common";
import { HistoryNavigationController } from "./HistoryNavigation.controller";
import { HistoryNavigationService } from "./HistoryNavigation.service";
import { MongooseModule } from "@nestjs/mongoose";
import { HistoryNavigationSchema } from "schemas/HistoryNavigation.entity";
import { ServerConfig } from "config/server.config";

@Module({
    imports : [
        MongooseModule.forFeature([
            { name : HistoryNavigation.name, schema : HistoryNavigationSchema }
        ], ServerConfig.getMongoDbName())
    ],
    controllers : [ HistoryNavigationController ],
    providers : [ HistoryNavigationService ]
})
export class HistoryNavigation {}