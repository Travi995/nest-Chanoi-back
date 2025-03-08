import { IsEmail, IsString,  MinLength } from "class-validator"

export class loginDto {
    @IsString()
    @IsEmail()
    email: string

    @IsString()
    @MinLength(8)
    password: string

}