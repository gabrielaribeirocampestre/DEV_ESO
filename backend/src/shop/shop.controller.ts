import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { ShopService } from './shop.service';
import { JwtAuthGuard } from '../auth/auth.guard';
import { GenerateShopDto } from './dto/generate-shop.dto';

@UseGuards(JwtAuthGuard)
@Controller('shop')
export class ShopController {
  constructor(private shop: ShopService) {}

  @Post('generate')
  generate(@Body() dto: GenerateShopDto) {
    return this.shop.generateDailyShop(dto.totalItems, dto.featuredItems);
  }

  @Get()
  getToday() {
    return this.shop.getTodayShop();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.shop.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.shop.delete(id);
  }
}
