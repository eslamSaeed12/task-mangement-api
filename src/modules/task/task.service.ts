import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { taskDto } from './task.dto';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  public getTasks(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  public addTask(task: taskDto): Promise<Task> {
    return this.tasksRepository.save(task);
  }

  getById(id: number) {
    return this.tasksRepository.find({
      where: { id },
    });
  }

  update(id: number, task: taskDto) {
    return this.tasksRepository.update(id, task);
  }

  delete(id: number) {
    return this.tasksRepository.delete(id);
  }

  constructor(
    @InjectRepository(Task) private tasksRepository: Repository<Task>,
  ) {}
}
