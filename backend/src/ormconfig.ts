import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Cosmetic } from './cosmetics/cosmetic.entity';
import { UserCosmetic } from './shop/user-cosmetic.entity';
import { Transaction } from './shop/transaction.entity';

export const ormconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [User, Cosmetic, UserCosmetic, Transaction],
  synchronize: true
};
