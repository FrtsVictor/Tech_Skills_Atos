import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { AppService } from '../app.service';

describe('UserController', () => {
  let UserController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [AppService],
    }).compile();

    UserController = app.get<UserController>(UserController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(UserController.getHello()).toBe('Hello World!');
    });
  });
});
