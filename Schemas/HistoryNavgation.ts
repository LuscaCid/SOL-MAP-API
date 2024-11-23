import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection : "HistoryNavigation" })
export class HistoryNavigation extends Document{
    //target place 
    @Prop({type : String})
    target : string;
    
    //source place 
    @Prop({type: String})
    source : string;

    @Prop()
    userId : string;
}

export const HistoryNavigationSchema = SchemaFactory.createForClass(HistoryNavigation);