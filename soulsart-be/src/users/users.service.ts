import { Injectable } from '@nestjs/common';
import { User } from '../entity/users/User';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../auth/dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findOne(email: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ email });
  }

  create(user: CreateUserDto): Promise<User> {
    return this.usersRepository.save({
      email: user.email,
      password: user.password,
    });
  }
}
