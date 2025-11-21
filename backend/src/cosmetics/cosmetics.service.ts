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

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  create(data: Partial<Cosmetic>) {
    const cosmetic = this.repo.create(data);
    return this.repo.save(cosmetic);
  }
}
