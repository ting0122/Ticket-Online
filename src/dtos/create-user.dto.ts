import { IsEmail, IsNotEmpty, MinLength, MaxLength, IsString } from 'class-validator'

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    public readonly name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    public readonly password: string;

    @IsString()
    @IsEmail()
    public readonly email: string;
}