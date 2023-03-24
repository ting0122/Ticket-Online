import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { ClientsController } from '../controllers/clients.controller';
import { ClientsModule } from './clients.module';

@Module({
  imports: [ClientsModule],
  controllers: [AppController, ClientsController],
  providers: [AppService],
})
export class AppModule {}
