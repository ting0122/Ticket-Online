import { Module } from '@nestjs/common';
import { UsersController } from 'src/controllers/users.controller';
import { UsersService } from 'src/services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/users.entity';


@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers:[UsersController],
    providers:[UsersService],
})
export class UsersModule {}
