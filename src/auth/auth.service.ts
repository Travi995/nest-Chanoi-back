import { Injectable } from '@nestjs/common';
import { authDto } from './dto/auth.dto';

@Injectable()
export class Auth {

    login(dto:authDto) {
        console.log(dto)
        return 'This action logs in a user'
    }

    register(dto:authDto) {
        console.log(dto)
        return 'This action registers a new user'
    }

}
