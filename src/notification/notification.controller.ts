import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { NotificationService } from "./notification.service";
import { AuthGuard } from "src/Auth/auth.guard";


@UseGuards(AuthGuard)
@ApiTags("Notificações")
@Controller("notification")
export class NotificationController {
    constructor (
        private readonly notificationService : NotificationService
    ){}

    @Get("userNotifications/:userId")
    async getUserNotifications (@Param("userId") userId : string) {
        const data = await this.notificationService.getUserNotifications(userId);
        return {
            data
        }
    }   
}