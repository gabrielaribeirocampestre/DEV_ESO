import { Controller, Get, Param } from '@nestjs/common';
import { CosmeticsService } from './cosmetics.service';

@Controller('cosmetics')
export class CosmeticsController {
  constructor(private service: CosmeticsService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }
}
