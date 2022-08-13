import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength } from 'class-validator';

export class taskDto {
  @ApiProperty()
  @IsString()
  @MaxLength(20)
  title: string;

  @ApiProperty()
  @IsEmail()
  @MaxLength(20)
  user_id: number;

  @ApiProperty()
  @Optional()
  @IsString()
  @MaxLength(20)
  status_id?: number;
}
