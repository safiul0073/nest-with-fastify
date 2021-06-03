import { IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class ProductDto {
    @IsString()
    @MinLength(4, {message: 'name is too short!'})
    @MaxLength(56, {message: 'Name is too Long!'})
    readonly name: string;

    @IsString()
    readonly description: string;

    @IsNumber()
    readonly price: number
}