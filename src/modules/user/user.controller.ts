import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import { DeleteResult, UpdateResult } from 'typeorm';
import { authenticateDto, userDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiResponse({
    status: 201,
    type: Array<User>,
  })
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @ApiResponse({
    status: 201,
    type: User,
  })
  @Get(':userId')
  findOne(@Param('userId', ParseIntPipe) userId: number): Promise<User> {
    return this.userService.findOne(userId);
  }

  @ApiResponse({
    status: 200,
    type: DeleteResult,
  })
  @Delete(':userId')
  deleteOne(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<DeleteResult> {
    return this.userService.delete(userId);
  }

  @ApiCreatedResponse({
    status: 200,
    type: User,
  })
  @Post()
  create(@Body() user: userDto): Promise<User> {
    return this.userService.create(user);
  }

  @Put(':userId')
  @ApiResponse({
    status: 200,
    type: UpdateResult,
  })
  update(
    @Body() user: userDto,
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<UpdateResult> {
    return this.userService.update(userId, user);
  }

  @Post('login')
  async login(@Body() user: authenticateDto) {
    return this.userService.authenticate(user.username, user.password);
  }
}
