import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopItem } from './shop-item.entity';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { CosmeticsModule } from '../cosmetics/cosmetics.module';

@Module({
  imports: [TypeOrmModule.forFeature([ShopItem]), CosmeticsModule],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule {}
