import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  exports: [TaskService],
  imports: [TypeOrmModule.forFeature([Task])],
})
export class TaskModule {}
