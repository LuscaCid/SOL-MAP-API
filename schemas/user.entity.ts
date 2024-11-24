import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({collection : "user"})
export class User extends Document{
    @Prop({type : String})

    fullName : string
    @Prop({type : String})

    email : string
    @Prop({type : String})

    password : string
    @Prop({type : String})

    nickname : string
}

export const UserSchema = SchemaFactory.createForClass(User);