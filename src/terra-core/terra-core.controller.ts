import { Controller ,Get, Post} from '@nestjs/common';
import { TerraCoreService } from './terra-core.service';

@Controller('terra')
export class TerraCoreController {
  constructor( private readonly terraCoreService: TerraCoreService) {};

  @Get('tx')
  transaction(): void {
    this.terraCoreService.transaction();
  }

  @Get('query')
  query(): void {
    this.terraCoreService.query();
  }
}
