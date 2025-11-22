import { User } from './users/user.entity';
import { Cosmetic } from './cosmetics/cosmetic.entity';
import { UserCosmetic } from './shop/user-cosmetic.entity';
import { Transaction } from './shop/transaction.entity';

export const ormconfig = {
  type: 'sqlite',
  database: process.env.DB_PATH || 'cosmetics_db.sqlite',
  entities: [User, Cosmetic, UserCosmetic, Transaction],
  synchronize: true, // cria tabelas automaticamente
};
