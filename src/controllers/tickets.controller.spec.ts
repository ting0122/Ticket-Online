import { Test, TestingModule } from '@nestjs/testing';
import { ticketsController } from './tickets.controller';

describe('ClientsController', () => {
  let controller: ticketsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ticketsController],
    }).compile();

    controller = module.get<ticketsController>(ticketsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
