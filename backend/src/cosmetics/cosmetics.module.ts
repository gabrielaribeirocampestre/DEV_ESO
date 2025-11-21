import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CosmeticsService } from './cosmetics.service';
import { CosmeticsController } from './cosmetics.controller';
import { Cosmetic } from './cosmetic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cosmetic])],
  providers: [CosmeticsService],
  controllers: [CosmeticsController],
  exports: [CosmeticsService],
})
export class CosmeticsModule {}
