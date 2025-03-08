import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Auth } from './auth.service';
import { loginDto } from './dto/login.dto';
import { registerDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly auth: Auth) {}

    @Post('login')
    login(@Body() authDto:loginDto) {
        return  this.auth.login(authDto)
    }

    @Post('register')
    create(@Body() createUserDto: registerDto) {
      return this.auth.register(createUserDto);
    }
}
