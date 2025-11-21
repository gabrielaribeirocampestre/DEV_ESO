import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

interface FortniteItemApi {
  name: string;
  description?: string;
  rarity?: { value: string };
  type?: { value: string };
  images?: { icon?: string; smallIcon?: string };
}

interface FortniteItem {
  name: string;
  description: string;
  price: number;
  rarity: string | null;
  type: string | null;
  imageUrl: string;
}

@Injectable()
export class FortniteApiService {
  constructor(private http: HttpService) {}

  async getCosmetics(): Promise<FortniteItem[]> {
    const url = 'https://fortnite-api.com/v2/cosmetics/br';
    const response = await firstValueFrom(this.http.get(url));

    const items: FortniteItem[] = response.data.data.map((item: FortniteItemApi) => ({
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
