import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get()
  getHello() {
    return 'hello';
  }

  @Post()
  createUser(@Body() createUser: User) {
    this.UserService.createUser(createUser);
  }

  @Get('all')
  getUsers() {
    return this.UserService.getAllusers();
  }
}
