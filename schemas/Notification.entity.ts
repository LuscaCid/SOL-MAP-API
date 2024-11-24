import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({collection : "notification", timestamps : true}) 
export class Notification extends Document {
    @Prop({type : String})
    userId : string;

    @Prop({type : String})
    message : string;

    @Prop({type : Boolean})
    isRead : Boolean;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);