import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Package } from "../package/package.entity";

@Entity()
export class Channel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  category!: string;

  @Column()
  description!: string;

  @ManyToOne(() => Package, (pack) => pack.channels)
  pack!: Package;
}
