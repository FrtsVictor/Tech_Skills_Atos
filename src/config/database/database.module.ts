import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationModule } from '../configuration.module';
import { OrmConfigService } from './database.configuration.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigurationModule],
      useClass: OrmConfigService,
    }),
  ],
})
export class DatabaseModule {}
