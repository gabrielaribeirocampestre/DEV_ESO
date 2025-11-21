import { Injectable } from '@nestjs/common';
import { FortniteApiService } from './fortnite-api.service';
import { CosmeticsService } from '../cosmetics/cosmetics.service';
import { Cosmetic } from '../cosmetics/cosmetic.entity';

@Injectable()
export class SyncService {
  constructor(
    private fortniteApi: FortniteApiService,
    private cosmetics: CosmeticsService,
  ) {}

  async syncCosmetics() {
    const data: Partial<Cosmetic>[] = await this.fortniteApi.getCosmetics();

    await this.cosmetics.clear();

    const imported = await this.cosmetics.bulkInsert(data);

    return {
      imported: imported.length,
    };
  }
}
