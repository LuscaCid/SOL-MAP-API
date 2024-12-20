import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "schemas/user.entity";
import { ServerConfig } from "config/server.config";
import { NotificationController } from "./notification.controller";
import { NotificationService } from "./notification.service";
import { Module } from "@nestjs/common";
import { Notification, NotificationSchema } from "schemas/Notification.entity";

@Module({
    imports : [
        MongooseModule.forFeature([
            { name : Notification.name, schema : NotificationSchema }
        ], ServerConfig.getMongoDbName())
    ],
    controllers : [NotificationController],
    providers : [NotificationService]
})
export class NotificationModule 
{}