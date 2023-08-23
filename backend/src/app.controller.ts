import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './guards/auth.guard';

@Controller()
export class AppController {
  @Get()
  @UseGuards(AuthGuard)
  getHello(): string {
    return 'Hello World!';
  }

  @Get('restricted')
  @UseGuards(AuthGuard)
  getRestricted(): string {
    return 'This is a restricted area!';
  }
}