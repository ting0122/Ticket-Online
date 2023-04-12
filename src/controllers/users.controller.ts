import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { SignInDto } from 'src/dtos/signin.dto';
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
    async postSignup_info(@Body() body:CreateUserDto){
        await this.usersService.postSignup_info(body);
    }

    //登入
    @Post()
    async postSignin_info(@Body() body:SignInDto){
        await this.usersService.postSignin_info(body);
    }

}
