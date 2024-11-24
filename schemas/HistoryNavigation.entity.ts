import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { Document } from "mongoose";

/**
 * @summary Class thats defines the model from historyNavigation and its used for the documentation
 */
@Schema({ collection : "HistoryNavigation" })
export class HistoryNavigation extends Document{
    //target place 
    @ApiProperty({description : "id do lugar registrado no banco dentro da organização que faz referencia ao destino da viagem"})
    @IsString()
    @IsNotEmpty()
    @Prop({type : String})
    target : string;
    
    //source place
    @ApiProperty({description : "id do lugar registrado no banco dentro da organização que faz referencia à origem de partida"})
    @IsString()
    @IsNotEmpty() 
    @Prop({type: String})
    source : string;

    @Prop()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({description : "id do usuario que vai realizar a navegação"})
    userId : string;
}

export const HistoryNavigationSchema = SchemaFactory.createForClass(HistoryNavigation);