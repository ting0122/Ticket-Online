import { Module } from '@nestjs/common';
import { ticketsController } from 'src/controllers/tickets.controller';
import { ticketsService } from 'src/services/tickets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from 'src/entities/tickets.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Ticket])],
    controllers: [ticketsController],
    providers: [ticketsService],
})
export class TicketsModule {}
