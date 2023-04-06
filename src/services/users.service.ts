import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { User } from 'src/entities/users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository:Repository<User>,
    ){}

    getUser_info(){
        return 'user_info';
    }

    postSignup_info(){
        return 'signup_info';
    }

    postSignin_info(){
        return 'signin_info';
    }
}
