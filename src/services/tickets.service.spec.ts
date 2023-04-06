import { Test, TestingModule } from '@nestjs/testing';
import { ticketsService } from './tickets.service';

describe('ServicesService', () => {
  let service: ticketsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ticketsService],
    }).compile();

    service = module.get<ticketsService>(ticketsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
