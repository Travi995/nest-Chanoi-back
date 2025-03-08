import { IsEmail, IsString,  MinLength } from "class-validator"

export class authDto {
    @IsString()
    @IsEmail()
    email: string

    @IsString()
    @MinLength(8)
    password: string

}