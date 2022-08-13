import {
  Column,
  Entity,
  ManyToOne,
  BaseEntity,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { Status } from '../status/status.entity';
import { User } from '../user/user.entity';

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    nullable: false,
    type: 'varchar',
  })
  title?: string;

  @ManyToOne((type) => Status, (status) => status.tasks)
  @JoinColumn({
    name: 'status_id',
  })
  status?: Status;

  @ManyToOne((type) => User, (user) => user.tasks)
  @JoinColumn({
    name: 'user_id',
  })
  user?: User;

  @Column()
  user_id?: number;

  @Column()
  status_id?: number;
}
