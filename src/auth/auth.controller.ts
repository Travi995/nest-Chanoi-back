import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Auth } from './auth.service';
import { authDto } from './dto/auth.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly auth: Auth) {}

    @Post('login')
    login(@Body() authDto:authDto) {
        return  this.auth.login(authDto)
    }

    @Post('register')
    create(@Body() createUserDto: CreateUserDto) {
      return this.auth.register(createUserDto);
    }
}
