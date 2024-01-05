import { Subscription } from "src/subscription/subscription.entity";
import { BeforeInsert, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import * as argon2 from 'argon2';
@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column({unique:true})
  email!: string;

  @Column({unique:true})
  name!: string;

  @Column()
  password!: string;
  
   @BeforeInsert()
  async hashPassword() {
    this.password = await argon2.hash(this.password);
  }


  @Column()
  mobile_number!: string;

  @Column()
  role!: string;

  @Column()
  active!: boolean;

  @OneToMany(() => Subscription, (subscription) => subscription.user, {
    cascade: true,
  })
  subscription!: Subscription[];
}
