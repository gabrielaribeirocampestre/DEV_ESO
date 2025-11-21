import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class FortniteApiService {
  constructor(private http: HttpService) {}

  async getCosmetics() {
    const url = 'https://fortnite-api.com/v2/cosmetics/br';

    const response = await firstValueFrom(this.http.get(url));

    const items = response.data.data.map(item => ({
      name: item.name,
      description: item.description || 'No description',
      price: 1000, // preço fixo (API não fornece)
      rarity: item.rarity?.value ?? null,
      type: item.type?.value ?? null,
      imageUrl: item.images?.icon || item.images?.smallIcon || '',
    }));

    return items;
  }
}
