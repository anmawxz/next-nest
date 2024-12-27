import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class AppController {
  @Get('data')
  getData() {
    console.log('Requisição recebida em /api/data');
    return { message: 'Hello from Nest.js!' };
  }
}
