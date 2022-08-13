import {
  Column,
  Entity,
  ManyToOne,
  BaseEntity,
  PrimaryGeneratedColumn,
  BeforeInsert,
} from 'typeorm';
import { Task } from '../task/task.entity';
import { hash } from 'bcryptjs';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    nullable: false,
    type: 'varchar',
    unique: true,
  })
  username?: string;

  @Column({
    nullable: false,
    type: 'varchar',
    unique: true,
  })
  email?: string;

  @Column({
    nullable: false,
    type: 'varchar',
  })
  password?: string;

  @ManyToOne((type) => Task, (task) => task.user)
  tasks?: Array<Task>;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }
}
