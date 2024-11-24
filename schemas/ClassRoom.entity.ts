import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({collection : 'place'})
export class ClassRoom extends Document {
    @Prop({type : String})
    name : string

    @Prop({type: Number})
    positionX : number;

    @Prop({type : Number})
    positionY : number;
}

export const ClassRoomSchema = SchemaFactory.createForClass(ClassRoom);