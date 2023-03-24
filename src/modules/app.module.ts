import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { ClientsModule } from './clients.module';

@Module({
  imports: [ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
