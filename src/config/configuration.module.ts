import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OrmConfigService } from './database/database.configuration.service';

import ormConfigLoader from './database/configuration.loader';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/src/config/envs/${
        process.env.NODE_ENV
      }.env`,
      isGlobal: true,
      load: [ormConfigLoader],
      cache: true,
    }),
  ],
  providers: [ConfigService, OrmConfigService],
  exports: [ConfigService, OrmConfigService],
})
export class ConfigurationModule {}
