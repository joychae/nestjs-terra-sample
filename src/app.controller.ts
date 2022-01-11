import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('tx')
  createWallet(): void {
    this.appService.transaction();
  }

  @Get('query')
  getChainQueryingResult(): void {
    this.appService.query();
  }
}
