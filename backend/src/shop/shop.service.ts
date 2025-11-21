import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShopItem } from '../cosmetics/dto/shop-item.entity';
import { CosmeticsService } from '../cosmetics/cosmetics.service';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(ShopItem)
    private repo: Repository<ShopItem>,
    private cosmetics: CosmeticsService,
  ) {}

  async create(dto: any) {
    const cosmetic = await this.cosmetics.findOne(dto.cosmeticId);
    if (!cosmetic) throw new NotFoundException('Cosmetic not found');

    const shopItem = this.repo.create({
      ...dto,
      price: dto.price ?? cosmetic.price,
    });

    return this.repo.save(shopItem);
  }

  // Gera loja do dia automaticamente
  async generateDailyShop(totalItems: number, featuredItems: number) {
    const cosmetics = await this.cosmetics.findAll(1, 9999);

    if (cosmetics.total < totalItems)
      throw new Error('Not enough cosmetics to generate the shop');

    const shuffled = cosmetics.items.sort(() => Math.random() - 0.5);

    const main = shuffled.slice(0, totalItems);
    const featured = shuffled.slice(totalItems, totalItems + featuredItems);

    const created: ShopItem[] = [];

    for (const item of main) {
      created.push(
        await this.repo.save({
          cosmeticId: item.id,
          price: item.price,
          featured: false,
        }),
      );
    }

    for (const item of featured) {
      created.push(
        await this.repo.save({
          cosmeticId: item.id,
          price: item.price,
          featured: true,
        }),
      );
    }

    return created;
  }

  async getTodayShop() {
    // pega as últimas 24h
    const today = await this.repo.find({
      relations: ['cosmetic'],
      order: { id: 'DESC' },
      take: 100,
    });

    return today;
  }

  async findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['cosmetic'] });
  }

  async delete(id: number) {
    return this.repo.delete(id);
  }
}
