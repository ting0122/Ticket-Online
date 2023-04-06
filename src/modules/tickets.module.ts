import { Module } from '@nestjs/common';
import { ticketsController } from 'src/controllers/tickets.controller';
import { ticketsService } from 'src/services/tickets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/users.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [ticketsController],
    providers: [ticketsService],
})
export class ClientsModule {}
