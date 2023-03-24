import { Module } from '@nestjs/common';
import { ClientsController } from 'src/controllers/clients.controller';
import { ClientsService } from 'src/services/clients.service';

@Module({
    imports: [],
    controllers: [ClientsController],
    providers: [ClientsService],
})
export class ClientsModule {}
