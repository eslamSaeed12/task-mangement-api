import {
  Column,
  BaseEntity,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Task } from '../task/task.entity';

@Entity()
export class Status extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    nullable: false,
    type: 'varchar',
  })
  title?: string;

  @OneToMany((type) => Task, (task) => task.status)
  tasks?: Array<Task>;
}
