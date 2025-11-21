import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { FortniteApiService } from './fortnite-api.service';
import { SyncService } from './sync.service';
import { SyncController } from './sync.controller';
import { CosmeticsModule } from '../cosmetics/cosmetics.module';

@Module({
  imports: [HttpModule, CosmeticsModule],
  controllers: [SyncController],
  providers: [FortniteApiService, SyncService],
})
export class SyncModule {}
