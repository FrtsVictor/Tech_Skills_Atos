import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skill } from './skill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Skill])],
  controllers: [],
  providers: [],
})
export class SkillModule {}
