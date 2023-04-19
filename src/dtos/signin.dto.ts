import { IsNotEmpty, IsString } from 'class-validator'

export class SignInDto {

    @IsNotEmpty()
    @IsString()
    public readonly name: string;
    
    @IsNotEmpty()
    @IsString()
    public readonly password: string;
}