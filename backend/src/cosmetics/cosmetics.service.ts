import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cosmetic } from './cosmetic.entity';

@Injectable()
export class CosmeticsService {
  constructor(
    @InjectRepository(Cosmetic)
    private repo: Repository<Cosmetic>,
  ) {}

  findAll(): Promise<Cosmetic[]> {
    return this.repo.find();
  }

  findOne(id: number): Promise<Cosmetic | null> {
    return this.repo.findOne({ where: { id } });
  }

  create(data: Partial<Cosmetic>): Promise<Cosmetic> {
    const cosmetic = this.repo.create(data);
    return this.repo.save(cosmetic);
  }

  async clear(): Promise<void> {
    await this.repo.clear();
  }

  async bulkInsert(data: Partial<Cosmetic>[]): Promise<Cosmetic[]> {
    const entities = this.repo.create(data);
    return this.repo.save(entities);
  }
}
