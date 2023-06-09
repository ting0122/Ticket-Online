import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { ConfigService } from '@nestjs/config';
import { ExtractJwt } from 'passport-jwt';

interface IUserPayload {
    id: number;
    username: string;
}

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService){}
   
    public async validateUser(
        username: string,
        password: string
    ){
        const user = await this.usersService.findUser(username);

        if(user === undefined || user === null){
            return null;
        }

        const pass = await bcrypt.compare(
            password,
            user.password
        );

        if(!pass){
            return null;
        }

        return user;
    }
}

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly authService: AuthService){
        super();
    }

    async validate(username: string, password: string){
        const user = await this.authService.validateUser(
            username,
            password
        );

        if(!user){
            throw new UnauthorizedException();
        }

        const payload: IUserPayload = {
            id: user.id,
            username: user.name
        };

        return payload;
    }
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt
                .fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('secret.jwt'),
        });
    }

    validate(payload : Record<string, any>) {
        const { id, username} = payload;
        const userPayload: IUserPayload = {
            id,
            username,
        };
        return userPayload;
    }
}
