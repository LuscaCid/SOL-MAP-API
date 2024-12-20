import { Body, Get, HttpCode, Post, Query } from "@nestjs/common";
import { GetHistoryNavigationDto } from "./DTO/Gets.dto";
import { HistoryNavigationService } from "./HistoryNavigation.service";
import { HistoryNavigation } from "schemas/HistoryNavigation.entity";

export class HistoryNavigationController {
    constructor(
        private readonly historyNavigationService : HistoryNavigationService 
    ) {}
    
    @Get("getUserHistoryNavigation")
    @HttpCode(200)
    async getUserHistoryNavigation (@Query() query : GetHistoryNavigationDto) {
        const historyFetched = await this.historyNavigationService.getUserHistoryNavigation(query);

        return {
            data : historyFetched,
            message : "histórico do usuario"
        }
    }

    @Post("addNewIntoHistoryNavigation")
    @HttpCode(201)
    async addNewIntoHistoryNavigation (@Body() data : HistoryNavigation) 
    {
        const response = await this.historyNavigationService.addNewIntoHistoryNavigation(data);

        return {
            data : response,
            message : "Novo item ao historico adicionado."
        }
    }
}