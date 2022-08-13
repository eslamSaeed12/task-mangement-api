import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compareSync } from 'bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { userDto } from './user.dto';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async create(user: userDto): Promise<User> {
    const newUser = new User();
    newUser.username = user.username;
    newUser.password = user.password;
    newUser.email = user.email;
    return this.userRepository.save(newUser);
  }

  async update(id: number, user: userDto): Promise<UpdateResult> {
    return this.userRepository.update({ id }, user);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.userRepository.delete({ id });
  }

  async authenticate(username: string, password: string) {
    const user = await this.userRepository.findOne({
      where: { username },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    if (!compareSync(password, user.password)) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
