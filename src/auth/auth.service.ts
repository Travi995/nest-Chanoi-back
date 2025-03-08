import { Injectable } from '@nestjs/common';
import { loginDto } from './dto/login.dto';
import { registerDto } from './dto/register.dto';

@Injectable()
export class Auth {

    login(dto:loginDto) {
        console.log(dto)
        return 'This action logs in a user'
    }

    register(dto:registerDto) {
        console.log(dto)
        return 'This action registers a new user'
    }

}
