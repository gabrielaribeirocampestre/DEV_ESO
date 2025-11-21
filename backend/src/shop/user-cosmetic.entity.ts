import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { User } from '../users/user.entity';
import { Cosmetic } from '../cosmetics/cosmetic.entity';

@Entity()
export class UserCosmetic {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { eager: true })
  user: User;

  @ManyToOne(() => Cosmetic, { eager: true })
  cosmetic: Cosmetic;

  @Column()
  acquiredAt: Date;
}
