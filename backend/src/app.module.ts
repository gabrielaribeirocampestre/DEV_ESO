import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ormconfig } from './ormconfig';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CosmeticsModule } from './cosmetics/cosmetics.module';
import { ShopModule } from './shop/shop.module';
import { SyncModule } from './sync/sync.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    AuthModule,
    UsersModule,
    CosmeticsModule,
    ShopModule,
    SyncModule
  ]
})
export class AppModule {}
