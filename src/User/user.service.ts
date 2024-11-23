import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ServerConfig } from "config/server.config";
import { Model } from "mongoose";
import { User } from "schemas/user";

@Injectable()
export class UserService {
    constructor (

        @InjectModel(User.name, ServerConfig.getMongoDbName())
        private readonly userModel : Model<User>
    ){}
    //metodos para lidar com usuario, edicoes, delecoes de conta...

}