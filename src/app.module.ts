import { Module } from '@nestjs/common';
import { TaskModule } from './modules/task/task.module';
import { UserModule } from './modules/user/user.module';
import { StatusModule } from './modules/status/status.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './modules/user/user.entity';
import { Task } from './modules/task/task.entity';
import { Status } from './modules/status/status.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: false,
      entities: [User, Task, Status],
      subscribers: [],
      autoLoadEntities: true,
    }),
    UserModule,
    TaskModule,
    StatusModule,
  ],
})
export class AppModule {}
