import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { User } from "Schemas/user";

@Injectable()
export class UserService {
    constructor (
        private readonly userModel : Model<User>
    ){}
    //metodos para lidar com usuario, edicoes, delecoes de conta...

}