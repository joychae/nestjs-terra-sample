import { Injectable } from '@nestjs/common';
import { InjectLCDClient } from 'nestjs-terra';
import { BlockTxBroadcastResult, LCDClient, MnemonicKey, MsgSend, Tx, Wallet } from '@terra-money/terra.js';

@Injectable()
export class TerraCoreService {
    constructor(
        @InjectLCDClient()
        private readonly terra: LCDClient,
      ) {};

    async query() {
        const marketParams = await this.terra.market.parameters();
        console.log(marketParams.base_pool);
    
        const exchangeRates = await this.terra.oracle.exchangeRates();
        console.log(exchangeRates.get('uusd'));
      }
    
      async transaction() {
        const mk: MnemonicKey = new MnemonicKey({
          mnemonic:
          'notice oak worry limit wrap speak medal online prefer cluster roof addict wrist behave treat actual wasp year salad speed social layer crew genius',
        });
        const wallet: Wallet = this.terra.wallet(mk);
    
        const send: MsgSend = new MsgSend(
          wallet.key.accAddress,
          'terra17lmam6zguazs5q5u6z5mmx76uj63gldnse2pdp',
          { uluna: 1000000, ukrw: 1230201, uusd: 1312029 }
        );
    
        const tx: Tx = await wallet.createAndSignTx({
          msgs: [send],
          memo: 'test from terra.js!',
        });
    
        const txResult: BlockTxBroadcastResult = await this.terra.tx.broadcast(tx);
        console.log(`TX hasg: ${txResult.txhash}`);
        console.log(`TX gas_used: ${txResult.gas_used}`);
        console.log(`TX gas_wanted: ${txResult.gas_wanted}`);
      }
}
