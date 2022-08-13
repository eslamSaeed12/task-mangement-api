import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength } from 'class-validator';

export class userDto {
  @ApiProperty()
  @IsString()
  @MaxLength(20)
  username: string;

  @ApiProperty()
  @IsEmail()
  @MaxLength(20)
  email: string;

  @ApiProperty()
  @IsString()
  @MaxLength(20)
  password: string;
}

export class authenticateDto {
  @ApiProperty()
  @IsString()
  @MaxLength(20)
  username: string;

  @ApiProperty()
  @IsString()
  @MaxLength(20)
  password: string;
}
