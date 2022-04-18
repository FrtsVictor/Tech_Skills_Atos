import { SkillModule } from './skills/skill.module';
import { CategoryModule } from './categories/categoy.module';
import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from './pipes/validation.pipe';
import { UserModule } from './users/user.module';
import { ConfigurationModule } from './config/configuration.module';
import { DatabaseModule } from './config/database/database.module';

@Module({
  imports: [
    ConfigurationModule,
    DatabaseModule,
    SkillModule,
    CategoryModule,
    UserModule,
  ],
  controllers: [],
  providers: [
    {
      useClass: ValidationPipe,
      provide: APP_PIPE,
    },
  ],
})
export class AppModule {}
