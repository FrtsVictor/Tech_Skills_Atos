import { IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { Skill } from '../skills/skill.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @IsString()
  name: string;

  @IsString()
  @Column()
  email: string;

  @IsString()
  @Column()
  das: string;

  @IsString()
  @Column()
  password: string;

  // @IsString()
  // skills: Skill[];
}
