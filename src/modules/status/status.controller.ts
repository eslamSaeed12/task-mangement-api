import { Controller, Get } from '@nestjs/common';
import { Status } from './status.entity';
import { StatusService } from './status.service';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  findAll(): Promise<Status[]> {
    return this.statusService.findAll();
  }
}
