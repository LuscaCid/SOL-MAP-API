import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class GetHistoryNavigationDto 
{
    @IsNumber()
    @IsNotEmpty()
    page : number;
    
    @IsNotEmpty()
    @IsString()
    userId : string;
}