import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from 'config/database.config';
import serverConfig from 'config/server.config';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { ClientsModule } from './clients.module';

@Module({
  imports: [
    ClientsModule,
    ConfigModule.forRoot({
      envFilePath:'development.env',
      load:[databaseConfig, serverConfig],
    })
  ],
  controllers: [AppController],
  providers: [ConfigService],
})
export class AppModule {}
