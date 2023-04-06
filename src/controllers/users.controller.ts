import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from 'src/services/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    //所有使用者
    @Get()
    getUser_info(){
        return this.usersService.getUser_info();
    }

    //註冊
    @Post()
    postSignup_info(){
        return this.usersService.postSignup_info();
    }

    //登入
    @Post()
    postSignin_info(){
        return this.usersService.postSignin_info();
    }

}
