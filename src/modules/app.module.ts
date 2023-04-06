import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from 'config/database.config';
import serverConfig from 'config/server.config';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { TicketsModule } from './tickets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/users.entity';
import { UsersModule } from './users.module';
import { Ticket } from 'src/entities/tickets.entity';

@Module({
  imports: [
    TicketsModule,
    ConfigModule.forRoot({
      envFilePath:'development.env',
      load:[databaseConfig, serverConfig],
    }),
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'root',
      database:'test',
      entities:[User, Ticket],
      synchronize:true,
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [ConfigService],
})
export class AppModule {}
