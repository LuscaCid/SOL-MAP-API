import { Prop, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({collection : 'place'})
export class ClassRoom extends Document {
    @Prop({type : String})
    name : string
}