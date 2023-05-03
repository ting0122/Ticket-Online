import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

    @UseGuards(AuthGuard('local'))
    @Post('signin')
    signin(@Req() req){
        return req.user;
    }

}
