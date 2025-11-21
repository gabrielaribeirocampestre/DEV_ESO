import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cosmetic } from '../cosmetics/cosmetic.entity';

@Entity()
export class ShopItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cosmetic)
  @JoinColumn({ name: 'cosmeticId' })
  cosmetic: Cosmetic;

  @Column()
  cosmeticId: number;

  @Column({ default: false })
  featured: boolean;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date; // indica a loja de qual dia é
}
