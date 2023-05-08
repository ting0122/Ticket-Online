import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { SignInDto } from 'src/dtos/signin.dto';
import { UsersService } from 'src/services/users.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UsersService
    ){}

    @UseGuards(AuthGuard('local'))
    @Post('signin')
    signin(@Req() user: SignInDto){
        return this.jwtService.sign(user);
    }

}
