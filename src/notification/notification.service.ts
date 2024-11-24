import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ServerConfig } from "config/server.config";
import { Model } from "mongoose";
import { Notification } from "schemas/Notification.entity";

@Injectable()
export class NotificationService {
    constructor (

        @InjectModel(Notification.name, ServerConfig.getMongoDbName())
        private readonly notificationModel : Model<Notification>
    ){}

}