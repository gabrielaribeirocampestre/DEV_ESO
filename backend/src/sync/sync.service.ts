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

  async findAll(): Promise<Cosmetic[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<Cosmetic | null> {
    return this.repo.findOne({ where: { id } });
  }

  async clear() {
    await this.repo.clear();
  }

  async bulkInsert(data: Partial<Cosmetic>[]) {
    const entities = this.repo.create(data);
    return this.repo.save(entities);
  }

  async create(dto: Partial<Cosmetic>) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }
}
