import { Injectable } from '@nestjs/common';
import { FortniteApiService } from './fortnite-api.service';
import { CosmeticsService } from '../cosmetics/cosmetics.service';

@Injectable()
export class SyncService {
  constructor(
    private fortniteApi: FortniteApiService,
    private cosmetics: CosmeticsService,
  ) {}

  async syncCosmetics() {
    // 1. Baixar cosméticos da API real
    const data = await this.fortniteApi.getCosmetics();

    // 2. Limpar tabela existente
    await this.cosmetics.clear();

    // 3. Inserir novos
    const imported = await this.cosmetics.bulkInsert(data);

    return {
      imported: imported.length,
    };
  }
}
