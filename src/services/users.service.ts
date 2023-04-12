import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { User } from 'src/entities/users.entity';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { SignInDto } from 'src/dtos/signin.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository:Repository<User>,
    ){}

    getUser_info(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async postSignup_info(dto: CreateUserDto){
        await this.usersRepository.create(dto);
    }

    async postSignin_info(dto: SignInDto){
        await this.usersRepository.findOneByOrFail({name:dto.name,password:dto.password});
    }
}
