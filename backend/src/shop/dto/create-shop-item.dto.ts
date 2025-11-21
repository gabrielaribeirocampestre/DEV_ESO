import { IsBoolean, IsNumber } from 'class-validator';

export class CreateShopItemDto {
  @IsNumber()
  cosmeticId?: number;

  @IsNumber()
  price?: number;

  @IsBoolean()
  featured?: boolean;
}
