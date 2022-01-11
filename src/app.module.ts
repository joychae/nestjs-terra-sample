import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MAINNET_CHAIN_ID, MAINNET_LCD_BASE_URL, TerraModule, TESTNET_CHAIN_ID, TESTNET_LCD_BASE_URL } from 'nestjs-terra';

@Module({
  imports: [
    TerraModule.forRoot({
      URL: TESTNET_LCD_BASE_URL,
      chainID: TESTNET_CHAIN_ID,
      // when you want connect with localterra
      // URL: 'http://localhost:1317',
      // chainID: 'localterra',
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
