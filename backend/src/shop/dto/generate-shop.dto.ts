import { IsNumber } from 'class-validator';

export class GenerateShopDto {
  @IsNumber()
  totalItems: number;

  @IsNumber()
  featuredItems: number;
}
