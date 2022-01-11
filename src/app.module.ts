import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TerraCoreModule } from './terra-core/terra-core.module';

@Module({
  imports: [
    TerraCoreModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
