import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getHello(){
    const database = this.configService.get('database');
    const port = this.configService.get('port');
    return { database, port };
  }
}
