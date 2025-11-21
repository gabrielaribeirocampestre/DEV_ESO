import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShopItem } from '../cosmetics/dto/shop-item.entity';
import { CosmeticsService } from '../cosmetics/cosmetics.service';
import { Cosmetic } from '../cosmetics/cosmetic.entity';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(ShopItem)
    private repo: Repository<ShopItem>,
    private cosmetics: CosmeticsService,
  ) {}

  async create(dto: { cosmeticId: number; price?: number; featured?: boolean }): Promise<ShopItem> {
    const cosmetic = await this.cosmetics.findOne(dto.cosmeticId);
    if (!cosmetic) throw new NotFoundException('Cosmetic not found');

    const shopItem = this.repo.create({
      cosmeticId: dto.cosmeticId,
      price: dto.price ?? cosmetic.price,
      featured: dto.featured ?? false,
    });

    return this.repo.save(shopItem);
  }

  // Gera loja do dia automaticamente
  async generateDailyShop(totalItems: number, featuredItems: number): Promise<ShopItem[]> {
    const cosmetics: Cosmetic[] = await this.cosmetics.findAll(); // sem argumentos
    if (cosmetics.length < totalItems + featuredItems)
      throw new Error('Not enough cosmetics to generate the shop');

    // embaralha
    const shuffled = [...cosmetics].sort(() => Math.random() - 0.5);

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

  async getTodayShop(): Promise<ShopItem[]> {
    return this.repo.find({
      relations: ['cosmetic'],
      order: { id: 'DESC' },
      take: 100,
    });
  }

  async findOne(id: number): Promise<ShopItem | null> {
    return this.repo.findOne({ where: { id }, relations: ['cosmetic'] });
  }

  async delete(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
