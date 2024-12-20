import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ServerConfig } from "config/server.config";
import { Model } from "mongoose";
import { HistoryNavigation } from "schemas/HistoryNavigation.entity";
import { GetHistoryNavigationDto } from "./DTO/Gets.dto";

@Injectable()
export class HistoryNavigationService {
    constructor (
        @InjectModel(HistoryNavigation.name, ServerConfig.getMongoDbName())
        private readonly historyNavigationModel : Model<HistoryNavigation>
    ) {}

    /**
     * @summary it returns the user history navigation by the places selected by him
     * @param query 
     * @returns 
     * @author Lucas Cid<lucasfelipaaa@gmail.com>
     */
    async getUserHistoryNavigation (query : GetHistoryNavigationDto) 
    {
        const limit = 10;
        const skip = (Number(query.page) - 1) * Number(limit);

        const historyData = await this.historyNavigationModel
        .find({ userId : query.userId })
        .skip(skip);

        return historyData;
    }   

    async addNewIntoHistoryNavigation (data : HistoryNavigation) 
    {
        const dataCreated= await this.historyNavigationModel.create(data);

    }
}