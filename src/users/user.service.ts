import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor() {} // private readonly userRepo: UserRepository, // @InjectRepository(UserRepository)

  private users: User[] = [];

  createUser(user: User): void {
    this.users.push(user);
  }
  getUserById(id: number) {
    return this.users[id];
  }
  getAllusers() {
    return this.users;
  }
}
