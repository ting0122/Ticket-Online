import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { User } from 'src/entities/users.entity';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { SignInDto } from 'src/dtos/signin.dto';
import * as bcrypt from 'bcrypt';
import { errorMonitor } from 'events';

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
        const { name, password, email} = dto;
        const isExist = await this.isExistUser(name);
        if(isExist){
            throw new Error('Duplicate username');
        }
        const encry_pwd = await bcrypt.hash(password,12);
        dto = {...dto,password : encry_pwd};
        await this.usersRepository.create(dto);
    }

    findUser(username:string){
        return this.usersRepository.findOneBy({name:username});
    }

    private async isExistUser(username:string):Promise<boolean>{
        const user = await this.usersRepository
        .createQueryBuilder('User')
        .where('User.name =: username',{username})
        .getOne();
        return !!user;
    }
}
