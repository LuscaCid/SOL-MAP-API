import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserService } from "./user.service";
@ApiTags("usuarios")
@Controller("user")
export class UserController {
    constructor (
        private readonly userService : UserService
    ){}
}