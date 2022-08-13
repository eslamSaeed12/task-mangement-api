import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { taskDto } from './task.dto';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll() {
    return this.taskService.getTasks();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.taskService.getById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() task: taskDto) {
    return this.taskService.update(id, task);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.taskService.delete(id);
  }

  @Post()
  create(@Body() task: taskDto) {
    return this.taskService.addTask(task);
  }
}
