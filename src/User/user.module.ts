import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "schemas/user.entity";
import { ServerConfig } from "config/server.config";

@Module({
    imports : [
        MongooseModule.forFeature([
            { name : User.name, schema : UserSchema }
        ], ServerConfig.getMongoDbName())
    ],
    controllers : [UserController],
    providers : [UserService]
})
export class UserModule 
{}