import { Module } from '@nestjs/common';
import { TerraCoreService } from './terra-core.service';
import { TerraCoreController } from './terra-core.controller';
import { MAINNET_CHAIN_ID, MAINNET_LCD_BASE_URL, TerraModule, TESTNET_CHAIN_ID, TESTNET_LCD_BASE_URL } from 'nestjs-terra';

@Module({
  imports: [
    TerraModule.forRoot({
      URL: TESTNET_LCD_BASE_URL,
      chainID: TESTNET_CHAIN_ID,
      // when you want connect with localterra
      // URL: 'http://localhost:1317',
      // chainID: 'localterra',
    }),
  ],
  providers: [TerraCoreService],
  controllers: [TerraCoreController]
})
export class TerraCoreModule {}
