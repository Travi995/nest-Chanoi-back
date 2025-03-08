import { IsString, IsEmail, MinLength, IsNumber, IsNotEmpty } from "class-validator"

export class registerDto {
    @IsString()
    @IsEmail()
    email: string

    @IsNumber()
    @IsNotEmpty()
    phone:number

    @IsString()
    @MinLength(8)
    password: string

}